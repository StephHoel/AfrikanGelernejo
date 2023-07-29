import { ReactNode, useState } from 'react'

interface Props {
  title: string
  number: string
  children: ReactNode
}

export default function TogglePericies({ title, number, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center">
        <p onClick={handleToggle} className="font-bold italic cursor-pointer">
          <i className="ph ph-hand-pointing" />
          <span className="underline italic">{number}</span>{' '}
          <span className="font-bold italic">{title}</span>
        </p>
      </div>

      {isExpanded && (
        <div className="mx-4 text-justify space-y-8">{children}</div>
      )}
    </div>
  )
}
