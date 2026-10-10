export function PreviewGhost({ ready }: { ready: boolean }) {
  return <div aria-hidden="true" className="preview-ghost" data-ready={ready} />
}
