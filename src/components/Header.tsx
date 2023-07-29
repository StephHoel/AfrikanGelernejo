import { OnDataUpdateProps } from '../lib/Interfaces'
import { Link } from './Link'

export default function Header({ onDataUpdate }: OnDataUpdateProps) {
  function handleDataUpdate(data: string) {
    onDataUpdate(data)
  }

  return (
    <>
      <Link href={''} onDataUpdate={handleDataUpdate}>
        Home
      </Link>
      |
      <Link href={'historia'} onDataUpdate={handleDataUpdate}>
        História
      </Link>
      |
      <Link href={'regras'} onDataUpdate={handleDataUpdate}>
        Regras
      </Link>
      |
      <Link href={'estagio'} onDataUpdate={handleDataUpdate}>
        Estágio
      </Link>
      |
      <Link href={'bico'} onDataUpdate={handleDataUpdate}>
        Empregos Temporários
      </Link>
      |
      <Link href={'fixo'} onDataUpdate={handleDataUpdate}>
        Empregos Fixos
      </Link>
    </>
  )
}
