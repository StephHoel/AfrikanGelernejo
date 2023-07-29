import { ReactNode } from 'react'

export interface PageProps {
  setPage: (data: string) => void
}

export interface ChildrenProps {
  children: ReactNode
}

export interface LinkProps {
  children: ReactNode
  setPage: (data: string) => void
  href: string
}
