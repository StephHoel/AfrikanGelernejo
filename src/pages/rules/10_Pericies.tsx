import { BackToTop } from '../../components/BackToTop'
import { Academy } from '../../components/Pericies/Academy'
import { Dance } from '../../components/Pericies/Dance'
import { General } from '../../components/Pericies/General'
import { Musical } from '../../components/Pericies/Musical'
import { Sport } from '../../components/Pericies/Sport'
import Toggle from '../../components/Toggle'

export default function Pericies() {
  return (
    <Toggle title="10. Perícias">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify">
        <p>
          Como uma escola que prepara o estudante para o mundo, nada mais justo
          que o aluno tenha possibilidades de aprendizado das mais diversas
          possíveis áreas. No RPG elas são chamadas de perícias. As perícias são
          habilidades que podem ser desenvolvidas e são divididas em Perícias
          Acadêmicas, Perícias Gerais, Perícias de Dança, Perícias Musicais e
          Perícias Esportivas que podem ser treinadas conforme suas escolhas da
          grade de horários.
        </p>

        <Academy />

        <General />

        <Dance />

        <Musical />

        <Sport />
      </div>
      <BackToTop />
    </Toggle>
  )
}
