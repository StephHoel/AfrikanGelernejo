import { BackToTop } from '../../components/BackToTop'
import {
  AbsorcaoDor,
  ControleGrito,
  Eletrocinese,
  Feiticaria,
  Invisibilidade,
  Longevidade,
  ManipulacaoElemental,
  MudarForma,
  PoderCura,
  Premonicao,
  Regeneracao,
  SalivaCicatrizante,
  SentidoMorte,
  SentidosAgucados,
  Telecinese,
  Teletransporte,
  VenenoParalisante,
} from '../../components/Powers'
import Toggle from '../../components/Toggle'

export default function Powers() {
  return (
    <Toggle title="9. Poderes">
      <div
        id="9"
        className="flex flex-col w-full m-auto space-y-8 text-justify"
      >
        <p>
          Poderes são as habilidades próprias de cada raça, podendo ter várias
          raças com o mesmo poder ou apenas uma. Para usar fora do treino, os
          poderes precisam estar pelo menos no nível 1.
        </p>
        <p>
          Os níveis indicam o quão bom você é e níveis altos aumentam a chance
          de conseguir realizar uma ação corretamente.
        </p>
        <p>
          Há poderes nativos (📘), que são aqueles que uma raça nasce sabendo
          como usar, e poderes naturais (📖), que são aqueles que precisam ser
          treinados para uma raça saber usar corretamente.
        </p>
        <p>
          Para desenvolver os poderes naturais, basta realizar os treinamentos.
          Em cada treinamento individual, somente um (1) poder deve ser
          desenvolvido. Para desenvolver outro poder, basta fazer o treinamento
          individual de outro dia letivo.
        </p>
        <p>
          Treinamentos em grupo desenvolvem todos os poderes naturais, dividindo
          o valor total do resultado dos dados entre eles da forma que melhor
          servir para o personagem.
        </p>
        <p>Abaixo uma explicação de cada um dos poderes.</p>

        {AbsorcaoDor()}

        {ControleGrito()}

        {Eletrocinese()}

        {Feiticaria()}

        {Invisibilidade()}

        {Longevidade()}

        {ManipulacaoElemental()}

        {MudarForma()}

        {PoderCura()}

        {Premonicao()}

        {Regeneracao()}

        {SalivaCicatrizante()}

        {SentidoMorte()}

        {SentidosAgucados()}

        {Telecinese()}

        {Teletransporte()}

        {VenenoParalisante()}
      </div>
      <BackToTop />
    </Toggle>
  )
}
