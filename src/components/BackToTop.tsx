export function BackToTop() {
  return (
    <div
      className="text-right mt-8 dk:cursor-pointer"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <i className="ph ph-arrow-circle-up text-5xl" />
    </div>
  )
}
