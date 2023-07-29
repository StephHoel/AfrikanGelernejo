import { OnDataUpdateProps } from '../lib/Interfaces'
import Pericies from './rules/10_Pericies'
import Jobs from './rules/11_Jobs'
import SocialMedias from './rules/12_SocialMedias'
import General from './rules/1_General'
import School from './rules/2_School'
import DicesAndAttributes from './rules/3_DicesAndAttributes'
import ClassesAndExperiences from './rules/4_ClassesAndExperiences'
import Monetary from './rules/5_Monetary'
import Uniforms from './rules/6_Uniforms'
import Races from './rules/7_Races'
import Habilities from './rules/8_Habilities'
import Powers from './rules/9_Powers'

export default function Rules({ onDataUpdate }: OnDataUpdateProps) {
  function handleDataUpdate(data: string) {
    onDataUpdate(data)
  }

  return (
    <div className="flex flex-col w-[80%] m-auto">
      <p className="text-6xl mb-8">Livro do Jogador</p>

      <div className="m-auto text-left w-full gap-12 pb-5 mb-10">
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
        <Jobs onDataUpdate={handleDataUpdate} />
        <SocialMedias />

        {/* <div>
              <p>
                <a href="#11">11. Empregos</a>
              </p>
              <p>
                <a href="#12">12. Redes Sociais</a>
              </p>
            </div> */}
      </div>
    </div>
  )
}
