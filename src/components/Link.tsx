import { LinkProps } from '../lib/Interfaces'

export function Link({ children, setPage, href }: LinkProps) {
  return (
    <p
      className="cursor-pointer  tablet:hover:text-green-500
      laptop:hover:text-green-500"
      onClick={() => {
        setPage(href)
      }}
    >
      {children}
    </p>
  )
}
