import { LinkProps } from '../lib/Interfaces'

export function Link({ children, onDataUpdate, href }: LinkProps) {
  function handleDataUpdate(data: string) {
    onDataUpdate(data)
  }
  return (
    <p
      className="cursor-pointer hover:text-green-500"
      onClick={() => {
        handleDataUpdate(href)
      }}
    >
      {children}
    </p>
  )
}
