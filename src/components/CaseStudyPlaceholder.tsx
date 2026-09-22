type CaseStudyPlaceholderProps = {
  label: string
  caption: string
}

export function CaseStudyPlaceholder({
  caption,
  label,
}: CaseStudyPlaceholderProps) {
  return (
    <figure className="mx-auto flex w-full max-w-[800px] flex-col gap-1">
      <div
        aria-label={`Image placeholder: ${label}`}
        className="case-placeholder"
        role="img"
      >
        <div className="case-placeholder__wireframe" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="case-placeholder__content">
          <span className="case-placeholder__eyebrow">Image placeholder</span>
          <span className="case-placeholder__label">{label}</span>
        </div>
      </div>
      <figcaption className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]">
        {caption}
      </figcaption>
    </figure>
  )
}
