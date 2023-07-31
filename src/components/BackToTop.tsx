export function BackToTop() {
  return (
    <div className="text-right mx-8 laptop:w-[80%] laptop:mx-auto">
      <i
        className="ph ph-arrow-circle-up text-5xl laptop:cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      />
    </div>
  )
}
