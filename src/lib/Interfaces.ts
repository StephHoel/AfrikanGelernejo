import { ReactNode } from 'react'

export interface OnDataUpdateProps {
  onDataUpdate: (data: string) => void
}

export interface ChildrenProps {
  children: ReactNode
}

export interface LinkProps {
  children: ReactNode
  onDataUpdate: (data: string) => void
  href: string
}
