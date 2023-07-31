import { PageProps } from '../lib/Interfaces'

import General from './rules/01_General'
import School from './rules/02_School'
import DicesAndAttributes from './rules/03_DicesAndAttributes'
import ClassesAndExperiences from './rules/04_ClassesAndExperiences'
import Monetary from './rules/05_Monetary'
import Uniforms from './rules/06_Uniforms'
import Races from './rules/07_Races'
import Habilities from './rules/08_Habilities'
import Powers from './rules/09_Powers'
import Pericies from './rules/10_Pericies'
import Jobs from './rules/11_Jobs'
import SocialMedias from './rules/12_SocialMedias'

export default function Rules({ setPage }: PageProps) {
  return (
    <div className="flex flex-col mini:w-full w-[80%] m-auto">
      <p className="text-6xl mb-8">Livro do Jogador</p>

      <div className="m-auto text-left w-full laptop:gap-12 laptop:pb-5 laptop:mb-10">
        <General />
        <School />
        <DicesAndAttributes />
        <ClassesAndExperiences />
        <Monetary />
        <Uniforms />
        <Races />
        <Habilities />
        <Powers />
        <Pericies />
        <Jobs setPage={setPage} />
        <SocialMedias />
      </div>
    </div>
  )
}
