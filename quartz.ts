import fs from "node:fs"
import path from "node:path"
import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import ExplorerOpenInNewTab from "./quartz/components/ExplorerOpenInNewTab"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  isFolder?: boolean
  displayName?: string
  slugSegment?: string
  data?: {
    slug?: string
    title?: string
  } | null
}

type ExplorerSortFn = (a: ExplorerNode, b: ExplorerNode) => number

const contentDir = path.join(process.cwd(), "content")
const knownRelatedInsertions = [
  ["共轭子群", "群在集合上的作用"],
  ["正规化子", "共轭子群"],
] as const

function normalizeTitle(title: string): string {
  const parts = title.replace(/\\/g, "/").split("/")
  const filename = parts[parts.length - 1] ?? title
  return filename.replace(/\.md$/i, "").trim()
}

function uniquePush(items: string[], item: string) {
  const normalized = normalizeTitle(item)
  if (normalized && !items.includes(normalized)) {
    items.push(normalized)
  }
}

function insertAfter(items: string[], item: string, anchor: string) {
  const normalized = normalizeTitle(item)
  if (!normalized || items.includes(normalized)) return

  const anchorIndex = items.indexOf(anchor)
  if (anchorIndex === -1) {
    items.push(normalized)
    return
  }

  items.splice(anchorIndex + 1, 0, normalized)
}

function inferTopicAnchor(title: string): string {
  const groupTerms = [
    "群",
    "子群",
    "陪集",
    "循环",
    "同态",
    "置换",
    "轨道",
    "稳定",
    "Sylow",
    "阿贝尔",
    "共轭",
    "正规化",
  ]
  const ringTerms = ["环", "理想", "整环", "UFD", "PID", "ED", "多项式", "CRT", "分式域", "局部化"]
  const fieldTerms = ["域", "扩张", "代数元", "Galois", "有限域", "分裂域", "可分"]

  if (groupTerms.some((term) => title.includes(term))) return "有限阿贝尔群结构定理"
  if (fieldTerms.some((term) => title.includes(term))) return "有限域"
  if (ringTerms.some((term) => title.includes(term))) return "多项式环与因式分解判别法"
  return ""
}

function readHomeOrder(): string[] {
  const indexPath = path.join(contentDir, "index.md")
  if (!fs.existsSync(indexPath)) return []

  const indexText = fs.readFileSync(indexPath, "utf-8")
  const order: string[] = []
  const wikiLinkPattern = /\[\[([^|\]#]+)(?:#[^|\]]*)?(?:\|[^\]]*)?\]\]/g
  let match: RegExpExecArray | null

  while ((match = wikiLinkPattern.exec(indexText)) !== null) {
    uniquePush(order, match[1])
  }

  return order
}

function readContentTitles(): string[] {
  if (!fs.existsSync(contentDir)) return []

  return fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md")
    .map((entry) => normalizeTitle(entry.name))
    .sort((a, b) => a.localeCompare(b, "zh-Hans-CN", { numeric: true, sensitivity: "base" }))
}

function buildExplorerOrder(): string[] {
  const order = readHomeOrder()
  const unlisted = new Set(readContentTitles().filter((title) => !order.includes(title)))

  for (const [title, anchor] of knownRelatedInsertions) {
    if (!unlisted.has(title)) continue
    insertAfter(order, title, anchor)
    unlisted.delete(title)
  }

  const inferredByAnchor = new Map<string, string[]>()
  for (const title of unlisted) {
    const anchor = inferTopicAnchor(title)
    if (!anchor) {
      uniquePush(order, title)
      continue
    }

    const titles = inferredByAnchor.get(anchor) ?? []
    titles.push(title)
    inferredByAnchor.set(anchor, titles)
  }

  for (const [anchor, titles] of inferredByAnchor) {
    const sortedTitles = titles.sort((a, b) =>
      a.localeCompare(b, "zh-Hans-CN", { numeric: true, sensitivity: "base" }),
    )

    for (let index = sortedTitles.length - 1; index >= 0; index--) {
      insertAfter(order, sortedTitles[index], anchor)
    }
  }

  return order
}

function makeExplorerSortFn(order: string[]): ExplorerSortFn {
  return new Function(
    "a",
    "b",
    `
      const order = ${JSON.stringify(order)}
      const normalizeTitle = (value) => {
        const raw = String(value || "").trim()
        const parts = raw.replace(/\\\\/g, "/").split("/")
        const filename = parts[parts.length - 1] || raw
        return filename.replace(/\\.md$/i, "").trim()
      }
      const titleOf = (node) =>
        normalizeTitle(
          (node && node.data && node.data.title) ||
          (node && node.displayName) ||
          (node && node.slugSegment) ||
          (node && node.data && node.data.slug) ||
          "",
        )
      const includesAny = (title, terms) => terms.some((term) => title.includes(term))
      const fallbackRank = (title) => {
        const groupTerms = ["群", "子群", "陪集", "循环", "同态", "置换", "轨道", "稳定", "Sylow", "阿贝尔", "共轭", "正规化"]
        const ringTerms = ["环", "理想", "整环", "UFD", "PID", "ED", "多项式", "CRT", "分式域", "局部化"]
        const fieldTerms = ["域", "扩张", "代数元", "Galois", "有限域", "分裂域", "可分"]
        const rankAfter = (anchor, fallback) => {
          const index = order.indexOf(anchor)
          return index === -1 ? fallback : index + 0.5
        }

        if (includesAny(title, groupTerms)) return rankAfter("有限阿贝尔群结构定理", order.length + 10)
        if (includesAny(title, fieldTerms)) return rankAfter("有限域", order.length + 30)
        if (includesAny(title, ringTerms)) return rankAfter("多项式环与因式分解判别法", order.length + 20)
        return order.length + 100
      }
      const rankOf = (node) => {
        const title = titleOf(node)
        const directRank = order.indexOf(title)
        return directRank === -1 ? fallbackRank(title) : directRank
      }

      const aRank = rankOf(a)
      const bRank = rankOf(b)
      if (aRank !== bRank) return aRank - bRank
      if (!!a.isFolder !== !!b.isFolder) return a.isFolder ? -1 : 1
      return titleOf(a).localeCompare(titleOf(b), "zh-Hans-CN", { numeric: true, sensitivity: "base" })
    `,
  ) as ExplorerSortFn
}

ExternalPlugin.Explorer({
  sortFn: makeExplorerSortFn(buildExplorerOrder()),
})
componentRegistry.register("ExplorerOpenInNewTab", ExplorerOpenInNewTab, "local")

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
