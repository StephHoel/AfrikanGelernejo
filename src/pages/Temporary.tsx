import { BackToTop } from '../components/BackToTop'
import { Discord, Quote } from '../components/Mods'

export default function Temporary() {
  return (
    <div className="flex flex-col w-[80%] m-auto">
      <p className="text-6xl mb-8 mx-auto">Vagas de Empregos Sem Vínculos</p>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p>
          Há três empregos sem vínculos que podem ser realizados a qualquer
          momento, quantas vezes forem necessárias.
        </p>
        <p>
          Os pagamentos serão realizados diretamente na conta bancária do
          personagem que realizar a atividade corretamente.
        </p>
        <p>
          Para receber o valor, é necessário realizar uma cena com começo, meio
          e fim, adicionando a frase &quot;CENA PARA EMPREGO SEM VÍNCULO&quot;
          em spoiler no começo ou no final da postagem:{' '}
          <Quote>|| CENA PARA EMPREGO SEM VÍNCULO ||</Quote>
        </p>
        <p>
          E lançar um dado no <Discord>#rolagem-de-dados</Discord>:{' '}
          <Quote>
            /roll notation:1d100*HORAS title:Emprego Sem Vínculo
            (NOME_DO_PERSONAGEM)
          </Quote>
        </p>
        <p>Requisitos:</p>
        <p>* Idade Real Mínima: 20 anos;</p>
        <p>* Não estar empregado, matriculado ou ter seu próprio negócio.</p>

        <p>Recompensas:</p>
        <p>* Até 100 EXP/hora para cada atributo</p>
        <p>* 400.000 MGA/hora</p>

        <p>
          OBS: Caso queira, é possível pedir para um ADM descrever uma situação
          base para sua cena. Mas lembre-se: serão descontados{' '}
          <span className="underline">10 EXP/hora</span> e{' '}
          <span className="underline">50.000 MGA/hora</span> das suas
          recompensas totais.
        </p>
      </div>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p className="italic text-3xl">
          <span className="font-bold">Cargo:</span> Fotógrafo
        </p>
        <p>
          Você pega sua câmera e registra o momento, para os outros ou para
          você. Ensaio fotográfico, aniversário e casamento são alguns dos
          trabalhos que você pode fazer.
        </p>
        <p>
          Os atributos desenvolvidos são{' '}
          <span className="underline">Inteligência</span> e{' '}
          <span className="underline">Sabedoria</span>.
        </p>
        <p>
          • Ensaio fotográfico: pode ser realizado em qualquer praça ou parque
          por até 2 horas;
        </p>
        <p>
          • Aniversário: pode ser realizado em salas de jantar, salões de festas
          ou qualquer outro ambiente cabível de haver esse tipo de comemoração
          por até 4 horas;
        </p>
        <p>• Casamento: realizado em salões de festas por até 6 horas.</p>
      </div>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p className="italic text-3xl">
          <span className="font-bold">Cargo:</span> Segurança
        </p>
        <p>
          Use sua autoridade para manter o lugar seguro, seja numa casa noturna,
          seja como segurança pessoal.
        </p>
        <p>
          Os atributos desenvolvidos são{' '}
          <span className="underline">Força</span> e{' '}
          <span className="underline">Resistência</span>.
        </p>
        <p>
          • Segurança de Festa: pode ser realizado em salas de jantar, salões de
          festas ou qualquer outro ambiente cabível de haver esse tipo de
          comemoração (seja coerente sobre o motivo ao qual te contrataram para
          manter a segurança de uma simples festa). O serviço pode durar até 6
          horas, com 1 hora antes e 1 hora depois da festa, totalizando 8 horas
          de trabalho;
        </p>
        <p>
          • Segurança Pessoal: pode ser realizado em qualquer lugar onde seu
          protegido esteja e pode durar até 7 horas;
        </p>
        <p>
          • Segurança de Boate: você ficará de pé proibindo ou permitindo que as
          pessoas entrem no local, também separando brigas na entrada e
          eventualmente dentro do local. Seu serviço dura 8 horas e pode ganhar
          um bônus de até 200.000 MGA por dia trabalhado. Para saber se ganhou
          ou não o bônus, basta lançar no <Discord>#rolagem-de-dados</Discord>:
        </p>
        <p>
          <Quote>
            /roll notation:1d100*2000 title:Bônus Segurança de Boate
            (NOME_DO_PERSONAGEM)
          </Quote>
        </p>
      </div>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p className="italic text-3xl">
          <span className="font-bold">Cargo:</span> Bartender
        </p>
        <p>
          Você vai fazer drinks e enquanto entretém os clientes. Seu trabalho
          pode durar até 7 horas.
        </p>
        <p>
          Como este trabalho lida com bebidas alcoólicas, a idade real mínima
          passa a ser 25 anos.
        </p>
        <p>
          Os atributos desenvolvidos são{' '}
          <span className="underline">Destreza</span> e{' '}
          <span className="underline">Carisma</span>.
        </p>
        <p>
          • Aniversários e Formaturas: podem ser realizados em salões de festas
          ou qualquer outro ambiente cabível de haver esse tipo de comemoração.
          O serviço dura até 4 horas;
        </p>
        <p>• Casamentos: realizado em salões de festas por até 6 horas;</p>
        <p>
          • Degustação: realizado em convenções, open bar ou qualquer outro
          ambiente cabível desse tipo de evento por até 7 horas.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
