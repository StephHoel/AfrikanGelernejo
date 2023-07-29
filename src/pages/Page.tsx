import { useState } from 'react'
import Header from '../components/Header'
import '../style.css'
import History from './History'
import Intern from './Intern'
import Jobs from './Jobs'
import Rules from './Rules'
import Temporary from './Temporary'

export default function Page() {
  const [page, setPage] = useState('')

  return (
    <div className={`app min-h-screen text-[#f0f8ff] p-4 bg-[#2f4f4f]`}>
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
      </main>
      <footer className="text-base">© Steph Hoel</footer>
    </div>
  )
}
