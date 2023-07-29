import { Discord } from '../../components/Mods'
import Toggle from '../../components/Toggle'
import ToggleUniform from '../../components/ToggleUniform'
import Athletics from '../../components/Uniforms/Athletics'
import Ballet from '../../components/Uniforms/Ballet'
import Basketball from '../../components/Uniforms/Basketball'
import Capoeira from '../../components/Uniforms/Capoeira'
import CommonClothes from '../../components/Uniforms/CommonClothes'
import Fencing from '../../components/Uniforms/Fencing'
import FieldHockey from '../../components/Uniforms/FieldHockey'
import FigureSkatingOnIce from '../../components/Uniforms/FigureSkatingOnIce'
import GalaOutfit from '../../components/Uniforms/GalaOutfit'
import Gym from '../../components/Uniforms/Gym'
import Handball from '../../components/Uniforms/Handball'
import IceHockey from '../../components/Uniforms/IceHockey'
import OlympicWrestling from '../../components/Uniforms/OlympicWrestling'
import Others from '../../components/Uniforms/Others'
import Rugby from '../../components/Uniforms/Rugby'
import SchoolMaterials from '../../components/Uniforms/SchoolMaterials'
import Soccer from '../../components/Uniforms/Soccer'
import Social from '../../components/Uniforms/Social'
import Swimming from '../../components/Uniforms/Swimming'
import Volleyball from '../../components/Uniforms/Volleyball'

export default function Uniforms() {
  return (
    <Toggle title="6. Uniformes, Materiais Escolares e Outros Itens">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify mb-10">
        <p>
          <span className="underline italic">6.</span>{' '}
          <span className="font-bold italic">
            Uniformes, Materiais Escolares e Outros Itens
          </span>
        </p>

        <p>
          Na Afrikan Gelernejo os alunos possuem múltiplas atividades e
          compromissos durante seu ano letivo e alguns itens são de extrema
          importância para o conforto e o bom funcionamento da escola.
        </p>

        <p>
          Apesar de não haver uniforme regular para o dia a dia no ambiente
          escolar, os esportes e algumas atividades extracurriculares requerem
          vestimenta ou itens apropriados.
        </p>

        <p>
          Abaixo vamos apresentar tudo o que precisa ser usado para cada
          atividade.
        </p>

        <ToggleUniform title="Uniforme Regular (dia-a-dia)">
          <p>
            A Afrikan Gelernejo não possui uniforme regular, permitindo que seus
            alunos vistam-se da forma que se sintam melhor: seja nas cores e
            tecidos de sua tribo, seja com roupas de ocidentais ou até
            orientais.
          </p>
        </ToggleUniform>

        <Social />

        <Gym />

        <Swimming />

        <Athletics />

        <Basketball />

        <Capoeira />

        <Fencing />

        <Soccer />

        <Handball />

        <FieldHockey />

        <IceHockey />

        <OlympicWrestling />

        <FigureSkatingOnIce />

        <Rugby />

        <Volleyball />

        <Ballet />

        <GalaOutfit />

        <CommonClothes />

        <Others />

        <SchoolMaterials />

        <p className="font-bold italic"> Observação: </p>

        <p>
          1. Lembramos que todos os pertences pessoais deverão estar
          identificados com o nome do estudante;
        </p>

        <p>
          2. Todos os alunos precisam usar blusa e short resistentes a todo
          momento, exceto durante a prática aquática (natação e polo) quando não
          é obrigatório. A roupa resistente funciona de forma diferente para
          cada raça, feita de nanobôs ela faz a ligação entre a tecnologia e o
          corpo;
        </p>

        <p>
          3. A Afrikan Gelernejo incentiva a comunicação entre o estudante, seus
          responsáveis e o mundo. Por isso, autorizamos o uso da internet
          recreativamente nos horários livres;
        </p>

        <p>
          4. O estudante deverá cuidar de seus próprios pertences e dos itens
          fornecidos pela escola. Não nos responsabilizamos pelos itens que,
          porventura, o estudante venha a perder ou danificar, ficando a cargo
          do próprio aluno repor o material imediatamente;
        </p>

        <p>
          5. Os itens básicos são disponibilizados gratuitamente no ato da
          matrícula, itens adicionais podem ser adquiridos na{' '}
          <Discord>#loja-da-escola</Discord>.
        </p>
      </div>
    </Toggle>
  )
}
