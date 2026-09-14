import flowImage from '@/assets/image-flow.png'
import menuImage from '@/assets/image-menu.png'

export function SandboxPage() {
  return (
    <section
      aria-label="Animated notification stack playground"
      className="flex flex-col items-center gap-10"
    >
      <figure className="flex w-full max-w-[600px] flex-col gap-3">
        <div className="h-[400px] w-full overflow-hidden rounded-[12px] border border-surface bg-surface">
          <iframe
            className="size-full border-0"
            loading="lazy"
            scrolling="no"
            src="https://animated-notification-stack.vercel.app/"
            title="Animated notification stack"
          />
        </div>
        <figcaption className="text-center text-sm text-muted">
          Animated notification stack
        </figcaption>
      </figure>
      <figure className="flex w-full max-w-[600px] flex-col gap-3">
        <img
          alt="Playground menu"
          className="h-auto w-full"
          src={menuImage}
        />
        <figcaption className="text-center text-sm text-muted">
          Action menu
        </figcaption>
      </figure>
      <figure className="flex w-full max-w-[600px] flex-col gap-3">
        <img
          alt="Workflow flow"
          className="h-auto w-full"
          src={flowImage}
        />
        <figcaption className="text-center text-sm text-muted">
          Workflow automation
        </figcaption>
      </figure>
    </section>
  )
}
