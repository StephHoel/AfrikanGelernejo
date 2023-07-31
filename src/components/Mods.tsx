import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Quote({ children }: Props) {
  return (
    <span className="bg-[#00000080] rounded-xl py-1 px-4 text-left no-laptop:leading-loose">
      {children}
    </span>
  )
}

export function Discord({ children }: Props) {
  return (
    <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">{children}</span>
  )
}
