import { ReactNode, useState } from 'react'
import { BackToTop } from './BackToTop'

interface Props {
  title: string
  children: ReactNode
}

export default function Toggle({ title, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center">
        <p onClick={handleToggle} className="text-4xl cursor-pointer">
          {title}
        </p>
      </div>

      {isExpanded && (
        <div className="mx-4 text-justify">
          {children}
          <BackToTop />
        </div>
      )}
    </div>
  )
}
