import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/chatwidget.scss"
// @ts-ignore
import script from "./scripts/chatwidget.inline"

type Options = {
  src: string
  title?: string
  width?: string
  height?: string
}

export default ((opts: Options) => {
  const ChatWidget: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="chat-widget">
        <div class="chat-widget__container" data-src={opts.src}>
          <div class="chat-widget__header">
            <span>{opts.title ?? "Chat"}</span>
            <button class="chat-widget__close" aria-label="Close chat">&times;</button>
          </div>
          <iframe
            src={opts.src}
            title={opts.title ?? "Chat"}
            style={{
              width: opts.width ?? "100%",
              height: opts.height ?? "500px",
            }}
            loading="lazy"
          />
        </div>
        <button class="chat-widget__toggle" aria-label="Open chat">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    )
  }

  ChatWidget.css = style
  ChatWidget.afterDOMLoaded = script
  return ChatWidget
}) satisfies QuartzComponentConstructor<Options>
