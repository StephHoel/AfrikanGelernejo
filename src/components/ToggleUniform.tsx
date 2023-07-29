import { ReactNode, useState } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export default function ToggleUniform({ title, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center">
        <p onClick={handleToggle} className="font-bold italic cursor-pointer">
          <i className="ph ph-hand-pointing" /> {title}
        </p>
      </div>

      {isExpanded && (
        <div className="mx-4 text-justify space-y-4">{children}</div>
      )}
    </div>
  )
}
