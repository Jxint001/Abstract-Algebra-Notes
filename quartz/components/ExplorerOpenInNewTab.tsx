import { QuartzComponentConstructor } from "./types"

const ExplorerOpenInNewTab: QuartzComponentConstructor = () => {
  function Component() {
    return null
  }

  Component.afterDOMLoaded = `
    window.__cleanupExplorerOpenInNewTab?.()

    const applyExplorerLinkTargets = () => {
      document.querySelectorAll(".explorer a").forEach((link) => {
        link.setAttribute("target", "_blank")
        link.setAttribute("rel", "noopener noreferrer")
        link.dataset.routerIgnore = ""
      })
    }

    const scheduleApplyExplorerLinkTargets = () => {
      requestAnimationFrame(applyExplorerLinkTargets)
    }

    applyExplorerLinkTargets()
    document.addEventListener("nav", scheduleApplyExplorerLinkTargets)
    document.addEventListener("render", scheduleApplyExplorerLinkTargets)

    const observer = new MutationObserver(scheduleApplyExplorerLinkTargets)
    observer.observe(document.body, { childList: true, subtree: true })

    window.__cleanupExplorerOpenInNewTab = () => {
      document.removeEventListener("nav", scheduleApplyExplorerLinkTargets)
      document.removeEventListener("render", scheduleApplyExplorerLinkTargets)
      observer.disconnect()
    }
  `

  return Component
}

export default ExplorerOpenInNewTab
