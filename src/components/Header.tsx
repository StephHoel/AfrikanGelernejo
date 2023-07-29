import { useEffect, useState } from 'react'

import { PageProps } from '../lib/Interfaces'

import { Link } from './Link'

export default function Header({ setPage }: PageProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (windowWidth <= 600) {
    // Tela pequena (celular)
    return RenderTelaPequena()
  } else {
    // Para tablet e desktop/laptop
    return RenderTelaGrande()
  }

  function RenderTelaGrande() {
    return (
      <>
        <Link href={''} setPage={setPage}>
          Home
        </Link>
        |
        <Link href={'historia'} setPage={setPage}>
          História
        </Link>
        |
        <Link href={'regras'} setPage={setPage}>
          Regras
        </Link>
        |
        <Link href={'estagio'} setPage={setPage}>
          Estágio
        </Link>
        |
        <Link href={'bico'} setPage={setPage}>
          Empregos Temporários
        </Link>
        |
        <Link href={'fixo'} setPage={setPage}>
          Empregos Fixos
        </Link>
      </>
    )
  }

  function RenderTelaPequena() {
    return (
      <div className="mb-8 absolute right-8 top-8 text-4xl">
        <i className="ph-fill ph-list" onClick={handleToggle} />
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
            onClick={handleToggle}
          >
            <div className="bg-[#2f4f4f] p-4 rounded-lg shadow-modal">
              <div className="w-full text-right">
                <i
                  className="ph-light ph-x-circle text-5xl"
                  onClick={handleToggle}
                />
              </div>
              <div className="-mt-12 p-8 text-center text-4xl space-y-6">
                <div className="border-b-[1px] pb-6">
                  <Link
                    href={''}
                    setPage={(page) => {
                      setPage(page)
                      handleToggle()
                    }}
                  >
                    Home
                  </Link>
                </div>

                <div className="border-b-[1px] pb-6">
                  <Link
                    href={'historia'}
                    setPage={(page) => {
                      setPage(page)
                      handleToggle()
                    }}
                  >
                    História
                  </Link>
                </div>

                <div className="border-b-[1px] pb-6">
                  <Link
                    href={'regras'}
                    setPage={(page) => {
                      setPage(page)
                      handleToggle()
                    }}
                  >
                    Regras
                  </Link>
                </div>

                <div className="border-b-[1px] pb-6">
                  <Link
                    href={'estagio'}
                    setPage={(page) => {
                      setPage(page)
                      handleToggle()
                    }}
                  >
                    Estágio
                  </Link>
                </div>

                <div className="border-b-[1px] pb-6">
                  <Link
                    href={'bico'}
                    setPage={(page) => {
                      setPage(page)
                      handleToggle()
                    }}
                  >
                    Empregos Temporários
                  </Link>
                </div>

                <Link
                  href={'fixo'}
                  setPage={(page) => {
                    setPage(page)
                    handleToggle()
                  }}
                >
                  Empregos Fixos
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
