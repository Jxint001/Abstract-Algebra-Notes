import { Graph as ExternalGraph } from "../../.quartz/plugins/graph/dist/index.js"
import type { GraphOptions } from "../../.quartz/plugins/graph/dist/index.js"
import type { QuartzComponentConstructor } from "./types"

function replaceOnce(script: string, search: string, replacement: string): [string, boolean] {
  const patched = script.replace(search, replacement)
  return [patched, patched !== script]
}

function patchGraphScript(script: string): string {
  if (script.includes("function decodeSlug(") || script.includes("function __decodeGraphSlug(")) {
    return script
  }

  let changed = false
  let patched = script

  ;[patched, changed] = replaceOnce(
    patched,
    `  function getSlugFromUrl() {
    var slug = getFullSlugFromUrl();
    var base = getBasePath();`,
    `  function decodeSlug(value) {
    if (typeof value !== "string") return value;
    try {
      return decodeURIComponent(value);
    } catch (_) {
      return value;
    }
  }

  function getSlugFromUrl() {
    var slug = decodeSlug(getFullSlugFromUrl());
    var base = decodeSlug(getBasePath());`,
  )

  const sourceReplacements: Array<[string, string]> = [
    ["var slug = simplifySlug(fullSlug);", "var slug = simplifySlug(decodeSlug(fullSlug));"],
    [
      "data.set(simplifySlug(key), dataRaw[key]);",
      "data.set(simplifySlug(decodeSlug(key)), dataRaw[key]);",
    ],
    ["var dest = simplifySlug(outgoing[i]);", "var dest = simplifySlug(decodeSlug(outgoing[i]));"],
    ["addToVisited(slug);", "addToVisited(simplifySlug(decodeSlug(slug)));"],
    ["addToVisited(simplifySlug(slug));", "addToVisited(simplifySlug(decodeSlug(slug)));"],
  ]

  const distReplacements: Array<[string, string]> = [
    [
      `(function(){function u(){var a=we(),o=Nu();return`,
      `(function(){function __decodeGraphSlug(a){if(typeof a!="string")return a;try{return decodeURIComponent(a)}catch{return a}}function u(){var a=__decodeGraphSlug(we()),o=__decodeGraphSlug(Nu());return`,
    ],
    [
      "async function D(d,w,g){var m=Fu(w);",
      "async function D(d,w,g){var m=Fu(__decodeGraphSlug(w));",
    ],
    ["eu.set(Fu(Ju),Ku[Ju])", "eu.set(Fu(__decodeGraphSlug(Ju)),Ku[Ju])"],
    ["var v=Fu(F[A]);", "var v=Fu(__decodeGraphSlug(F[A]));"],
    [
      "function uu(){f();var d=++E,w=u();c(w);",
      "function uu(){f();var d=++E,w=u();c(Fu(__decodeGraphSlug(w)));",
    ],
    ["if(c(Fu(w)),uu(),", "if(c(Fu(__decodeGraphSlug(w))),uu(),"],
  ]

  for (const [search, replacement] of [...sourceReplacements, ...distReplacements]) {
    let didReplace = false
    ;[patched, didReplace] = replaceOnce(patched, search, replacement)
    changed ||= didReplace
  }

  if (!changed) {
    console.warn("[DecodedGraph] Graph script patch did not match the installed plugin version.")
  }

  return patched
}

const DecodedGraph: QuartzComponentConstructor<Partial<GraphOptions> | undefined> = (opts) => {
  const Graph = ExternalGraph(opts)
  Graph.afterDOMLoaded = patchGraphScript(Graph.afterDOMLoaded ?? "")
  return Graph
}

export default DecodedGraph
