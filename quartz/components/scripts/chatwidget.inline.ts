document.addEventListener("nav", () => {
  const toggle = document.querySelector(".chat-widget__toggle") as HTMLButtonElement | null
  const container = document.querySelector(".chat-widget__container") as HTMLDivElement | null
  const close = document.querySelector(".chat-widget__close") as HTMLButtonElement | null

  if (!toggle || !container || !close) return

  let open = false

  function openChat() {
    open = true
    container.classList.add("open")
    toggle.style.display = "none"
  }

  function closeChat() {
    open = false
    container.classList.remove("open")
    toggle.style.display = "flex"
    // unload iframe to free resources
    const iframe = container.querySelector("iframe") as HTMLIFrameElement | null
    if (iframe) {
      iframe.src = iframe.src
    }
  }

  toggle.addEventListener("click", openChat)
  close.addEventListener("click", closeChat)

  window.addCleanup(() => {
    toggle.removeEventListener("click", openChat)
    close.removeEventListener("click", closeChat)
  })
})
