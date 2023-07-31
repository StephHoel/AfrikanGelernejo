import { BackToTop } from '../../components/BackToTop'
import { Discord } from '../../components/Mods'
import Toggle from '../../components/Toggle'

export default function Monetary() {
  return (
    <Toggle title="5. Sistema Monetário">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify">
        <p>
          <span className="underline italic">5.</span>
          <span className="font-bold italic"> Monetário </span>
        </p>

        <p>
          Um sistema monetário é um conjunto de regras que rege a organização da
          moeda em determinado espaço monetário. Aqui usamos algumas regras para
          o melhor desenvolvimento do jogo. Considerando o país onde a escola
          está localizada, nossa moeda oficial será o Ariary de Madagáscar
          (MGA). Para facilitar, não utilizaremos as subdivisões da moeda.
        </p>

        <p>
          Assim que sua ficha é aprovada, seu personagem receberá os materiais
          básicos para começar a estudar e a quantia de 400.000 MGA em sua conta
          bancária.
        </p>

        <p>
          <span className="italic">Onde encontro essas coisas?</span> Os itens
          você encontrará na sua Ficha de Personagem em{' '}
          <Discord>#modelo-de-ficha</Discord>. E o dinheiro você encontra na
          conta bancária em <Discord>#🏦banco-de-madagascar</Discord>. A maioria
          dos itens tem prazo de validade, preste atenção à ele para não ficar
          sem e sofrer dano desnecessário.
        </p>

        <p>
          <span className="italic">Mas onde gastar?</span> Com roupas novas ou
          substituindo as antigas caso algum acidente aconteça, assim como
          itens, viagens, dentre outras coisas. A loja escolar está aberta à
          todos os alunos, assim como o comércio da cidade mais próxima para os
          alunos que podem frequentá-la. Em breve haverá novos locais onde
          gastar seus Ariary.
        </p>

        <p className="font-bold italic"> Posso doar/transferir Ariary? </p>

        <p>
          É claro que pode! Diretamente no{' '}
          <Discord>#🏦banco-de-madagascar</Discord>, também conhecido como Banco
          Central de Madagáscar, você encontra o passo-a-passo para realizar as
          transferências.
        </p>

        <p className="font-bold italic">
          Preciso me preocupar em fazer contas e lembrar dos valores?
        </p>

        <p>
          Não! Todos os itens e valores serão registrados pela ADM na Ficha do
          Personagem e na conta bancária do personagem. Basta visitar o tópico
          de seu personagem e verificar.
        </p>

        <p>Qualquer dúvida é só entrar em contato com uma ADM.</p>
      </div>
      <BackToTop />
    </Toggle>
  )
}
