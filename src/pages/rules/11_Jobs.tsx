import { Link } from '../../components/Link'
import Toggle from '../../components/Toggle'
import { OnDataUpdateProps } from '../../lib/Interfaces'

export default function Jobs({ onDataUpdate }: OnDataUpdateProps) {
  function handleDataUpdate(data: string) {
    onDataUpdate(data)
  }
  return (
    <Toggle title="11. Empregos">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify mb-10">
        <p>
          Esse sistema é para que o personagem possa ter uma ocupação em que
          continue evoluindo e ao mesmo tempo ganhe uns Ariary Madagáscar para
          se manter.
        </p>
        <p>
          Há três tipos de empregos aqui na Afrikan Gelernejo: estágio, emprego
          sem vínculo e emprego formal.
        </p>
        <p>
          Independente do tipo de emprego que você escolher, todos vão ajudar no
          desenvolvimento do seu personagem.
        </p>

        <p>
          • Estágio é uma forma de aprendizado e trabalho enquanto estuda. O
          estagiário normalmente trabalha de dentro da escola, trazendo soluções
          para os problemas propostos pela empresa em que presta o serviço.
        </p>

        <Link href="estagio" onDataUpdate={handleDataUpdate}>
          <i className="ph ph-hand-pointing" /> Veja as vagas de Estágio aqui
        </Link>

        <p>
          • Emprego sem vínculo é um trabalho rápido, onde você não precisa
          pedir para conseguí-lo, mas que consegue evoluir o personagem sem
          maiores problemas. Para estes, é necessário ter no mínimo a idade real
          de 20 anos (idade aparente de 16 anos).
        </p>

        <Link onDataUpdate={handleDataUpdate} href={'bico'}>
          <i className="ph ph-hand-pointing" /> Veja as vagas de Emprego sem
          Vínculo aqui
        </Link>

        <p>
          • Empregos formais são os que você precisa ser contratado. São
          diversos cargos e cada um deles têm seus próprios requisitos.
        </p>

        <Link onDataUpdate={handleDataUpdate} href={'fixo'}>
          <i className="ph ph-hand-pointing" /> Veja as vagas de Emprego Formal
          (Fixo) aqui
        </Link>
      </div>
    </Toggle>
  )
}
