import { constants, promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const repoRoot = path.resolve(path.dirname(__filename), "..")
const contentDir = path.join(repoRoot, "content")

const sourceVault = process.env.OBSIDIAN_VAULT_PATH

if (!sourceVault) {
  console.error("OBSIDIAN_VAULT_PATH is required.")
  console.error(
    'Example: OBSIDIAN_VAULT_PATH="/mnt/e/MyFiles/Research_all/Abstract Algebra/Abstract Algebra" npm run sync:vault',
  )
  process.exit(1)
}

const sourceRoot = path.resolve(sourceVault)

async function assertReadableDirectory(dir) {
  const stat = await fs.stat(dir)
  if (!stat.isDirectory()) {
    throw new Error(`Not a directory: ${dir}`)
  }
  await fs.access(dir, constants.R_OK)
}

async function resetContentDirectory(dir) {
  await fs.mkdir(dir, { recursive: true })
  const entries = await fs.readdir(dir)
  await Promise.all(
    entries.map((entry) =>
      fs.rm(path.join(dir, entry), { recursive: true, force: true }),
    ),
  )
}

function isExplicitlyNonPublic(sourceName) {
  const compactName = sourceName.toLowerCase().replace(/\s+/g, "")
  return compactName.includes("不能push") || compactName.includes("donotpush")
}

function isPublicMarkdown(entry) {
  return (
    entry.isFile() &&
    !entry.name.startsWith(".") &&
    entry.name.endsWith(".md") &&
    !isExplicitlyNonPublic(entry.name)
  )
}

function destinationName(sourceName) {
  return sourceName === "Content.md" ? "index.md" : sourceName
}

function splitBlockquotePrefix(line) {
  const match = line.match(/^(\s*(?:>\s*)*)(.*)$/)
  return {
    prefix: match?.[1] ?? "",
    content: match?.[2] ?? line,
  }
}

function isDisplayMathStart(content, markerIndex) {
  if (markerIndex < 0) {
    return false
  }

  const before = content.slice(0, markerIndex)
  if (before.trim() === "") {
    return true
  }

  const previous = before.at(-1)
  return Boolean(previous && /[\s:：,，;；.!！?？、([{（]/.test(previous))
}

function quoteBlank(prefix) {
  return prefix.includes(">") ? prefix.trimEnd() : ""
}

function pushDisplayBlock(output, prefix, before, math, after) {
  const trimmedBefore = before.trimEnd()
  const trimmedMath = math.trim()
  const trimmedAfter = after.trimStart()

  if (trimmedBefore) {
    output.push(prefix + trimmedBefore)
    output.push(quoteBlank(prefix))
  }

  output.push(prefix + "$$")
  if (trimmedMath) {
    output.push(prefix + trimmedMath)
  }
  output.push(prefix + "$$")

  if (trimmedAfter) {
    output.push(quoteBlank(prefix))
    output.push(prefix + trimmedAfter)
  }
}

function normalizeInlineMathBoundaries(content) {
  return content.replaceAll("$$", "$ $")
}

function normalizeDisplayMath(markdown) {
  const lines = markdown.split(/\r?\n/)
  const output = []
  let inFence = false
  let fenceMarker = ""
  let inDisplayMath = false

  for (const line of lines) {
    const { prefix, content } = splitBlockquotePrefix(line)
    const trimmed = content.trim()

    const fenceMatch = trimmed.match(/^(```+|~~~+)/)
    if (fenceMatch && !inDisplayMath) {
      const marker = fenceMatch[1][0]
      if (!inFence) {
        inFence = true
        fenceMarker = marker
      } else if (marker === fenceMarker) {
        inFence = false
        fenceMarker = ""
      }
      output.push(line)
      continue
    }

    if (inFence) {
      output.push(line)
      continue
    }

    if (trimmed === "$$") {
      inDisplayMath = !inDisplayMath
      output.push(line)
      continue
    }

    if (inDisplayMath) {
      const close = content.indexOf("$$")
      if (close >= 0) {
        const mathBeforeClose = content.slice(0, close).trimEnd()
        const afterClose = content.slice(close + 2).trimStart()
        if (mathBeforeClose) {
          output.push(prefix + mathBeforeClose)
        }
        output.push(prefix + "$$")
        if (afterClose) {
          output.push(quoteBlank(prefix))
          output.push(prefix + afterClose)
        }
        inDisplayMath = false
      } else {
        output.push(prefix + content)
      }
      continue
    }

    const start = content.indexOf("$$")
    if (!isDisplayMathStart(content, start)) {
      output.push(prefix + normalizeInlineMathBoundaries(content))
      continue
    }

    const afterStart = content.slice(start + 2)
    const endInRemainder = afterStart.indexOf("$$")

    if (endInRemainder >= 0) {
      const end = start + 2 + endInRemainder
      pushDisplayBlock(
        output,
        prefix,
        content.slice(0, start),
        content.slice(start + 2, end),
        content.slice(end + 2),
      )
      continue
    }

    const before = content.slice(0, start)
    const firstMathLine = content.slice(start + 2).trim()
    if (before.trimEnd()) {
      output.push(prefix + before.trimEnd())
      output.push(quoteBlank(prefix))
    }
    output.push(prefix + "$$")
    if (firstMathLine) {
      output.push(prefix + firstMathLine)
    }
    inDisplayMath = true
  }

  return output.join("\n")
}

async function main() {
  await assertReadableDirectory(sourceRoot)

  const sourceEntries = await fs.readdir(sourceRoot, { withFileTypes: true })
  const skippedEntries = sourceEntries
    .filter(
      (entry) =>
        entry.isFile() &&
        !entry.name.startsWith(".") &&
        entry.name.endsWith(".md") &&
        isExplicitlyNonPublic(entry.name),
    )
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"))
  const markdownEntries = sourceEntries
    .filter(isPublicMarkdown)
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"))

  const destinations = new Map()
  for (const entry of markdownEntries) {
    const destName = destinationName(entry.name)
    if (destinations.has(destName)) {
      throw new Error(
        `Destination conflict: ${entry.name} and ${destinations.get(destName)} both map to ${destName}`,
      )
    }
    destinations.set(destName, entry.name)
  }

  await resetContentDirectory(contentDir)

  for (const entry of markdownEntries) {
    const sourcePath = path.join(sourceRoot, entry.name)
    const destPath = path.join(contentDir, destinationName(entry.name))
    const markdown = await fs.readFile(sourcePath, "utf8")
    await fs.writeFile(destPath, normalizeDisplayMath(markdown), "utf8")
  }

  console.log(`Copied ${markdownEntries.length} Markdown files from:`)
  console.log(sourceRoot)
  console.log("to:")
  console.log(contentDir)
  if (skippedEntries.length > 0) {
    console.log(`Skipped ${skippedEntries.length} explicitly non-public Markdown file(s):`)
    for (const entry of skippedEntries) {
      console.log(`- ${entry.name}`)
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
