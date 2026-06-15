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

function isPublicMarkdown(entry) {
  return entry.isFile() && !entry.name.startsWith(".") && entry.name.endsWith(".md")
}

function destinationName(sourceName) {
  return sourceName === "Content.md" ? "index.md" : sourceName
}

async function main() {
  await assertReadableDirectory(sourceRoot)

  const sourceEntries = await fs.readdir(sourceRoot, { withFileTypes: true })
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
    await fs.copyFile(sourcePath, destPath)
  }

  console.log(`Copied ${markdownEntries.length} Markdown files from:`)
  console.log(sourceRoot)
  console.log("to:")
  console.log(contentDir)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
