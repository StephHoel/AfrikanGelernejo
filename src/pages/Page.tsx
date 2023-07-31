import { useEffect, useRef, useState } from 'react'
import { BackToTop } from '../components/BackToTop'
import Header from '../components/Header'
import '../style.css'
import History from './History'
import Intern from './Intern'
import Jobs from './Jobs'
import Rules from './Rules'
import Temporary from './Temporary'

export default function Page() {
  const [page, setPage] = useState('')

  const contentRef = useRef<HTMLDivElement>(null)

  const [totalContent, setTotalContent] = useState<number>(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleMutation = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // O tamanho do conteúdo foi alterado, atualize a variável totalContent.

          const contentHeight = getContentHeight()

          setTotalContent(contentHeight)
        }
      }
    }

    const getContentHeight = () => {
      const contentElement = contentRef.current
      if (contentElement) {
        return contentElement.clientHeight
      }
      return 0
    }

    // Configurar o Mutation Observer para observar mudanças no elemento de conteúdo.
    const observer = new MutationObserver(handleMutation)
    const contentElement = contentRef.current

    if (contentElement) {
      observer.observe(contentElement, { childList: true, subtree: true })
      setTotalContent(getContentHeight())
    }

    // console.log('totalContent -', totalContent)

    // Limpar o Mutation Observer quando o componente for desmontado.
    return () => {
      observer.disconnect()
    }
  })

  return (
    <div
      id="app"
      ref={contentRef}
      className={`min-h-screen text-[#f0f8ff] p-4 bg-[#2f4f4f]`}
    >
      <header className="flex justify-between w-[90vw] mx-auto">
        <Header setPage={setPage} />
      </header>
      <main className={`text-center ${page === '' ? ' my-auto' : 'mt-12'}`}>
        {page === 'historia' ? (
          <History />
        ) : page === 'regras' ? (
          <Rules setPage={setPage} />
        ) : page === 'estagio' ? (
          <Intern />
        ) : page === 'bico' ? (
          <Temporary />
        ) : page === 'fixo' ? (
          <Jobs />
        ) : (
          <div className="text-4xl space-y-16">
            <p>Um RPG do universo King&apos;s Academy de Steph Hoel</p>

            <p>
              Aqui você encontra as informações relevantes para sua jogatina!
            </p>

            <p>Para começar, escolha uma sessão no menu superior.</p>
          </div>
        )}

        {totalContent > window.innerHeight ? <BackToTop /> : null}
      </main>
      <footer className="text-base">© Steph Hoel 2023</footer>
    </div>
  )
}
