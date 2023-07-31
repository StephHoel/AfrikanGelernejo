import { BackToTop } from '../../components/BackToTop'
import Toggle from '../../components/Toggle'

export default function Races() {
  return (
    <Toggle title="7. Raças">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify">
        <p>
          <span className="underline italic">7.</span>
          <span className="font-bold italic"> Raças </span>
        </p>
        <p>
          Em nosso universo, temos diversas raças convivendo umas com as outras.
        </p>
        <p>
          A função da escola é desenvolver suas habilidades e poderes a fim de
          tornar essa convivência a melhor possível.
        </p>
        <p>
          Para isto, existe um traje interno com nanorobôs (nanotraje) para
          controlar os poderes o máximo possível e que deve ser utilizada a todo
          momento.
        </p>
        <p>
          Estes nanotrajes não são destruídos com as transformações ou ataques e
          protegem os vampiros dos raios solares (permitindo que estes possam
          conviver com os demais alunos durante o dia).
        </p>
        <p>
          Cada raça tem seu conjunto de habilidades e poderes que começam no
          nível 1.
        </p>
        <p>Qualquer dúvida, pergunte à um ADM.</p>

        {Arcano()}

        {Banshee()}

        {Hibrido()}

        {Humano()}

        {Kanima()}

        {Kitsune()}

        {Lobisomem()}

        {Transmorfo()}

        {Vampiro()}

        {Wiccaniano()}
      </div>
      <BackToTop />
    </Toggle>
  )
}

function Arcano() {
  return (
    <div className="space-y-8">
      <p>
        <span className="font-bold italic"> ARCANO </span>
      </p>
      <p>
        Arcanos, também conhecido como magos, são capazes de manipular a mágica
        dentro de si com seus canalizadores de poder.
      </p>
      <p>
        O filho de dois pais Arcanos (puros ou não) tem sua manifestação bem
        mais cedo de magia do que filhos de apenas um Arcano, que manifestam
        depois dos 12 anos.
      </p>
      <p>
        Além disso, a magia correndo em seu corpo lhe oferece a longevidade.
      </p>
      <p>
        Habilidades: <span className="underline">Destreza</span>,{' '}
        <span className="underline">Inteligência</span> e{' '}
        <span className="underline">Sabedoria</span>.
      </p>
      <p>
        Poderes: <span className="underline">Feitiçaria</span>,{' '}
        <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Manipulação Elemental</span> e{' '}
        <span className="underline">Poder de Cura</span>.
      </p>
    </div>
  )
}

function Banshee() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> BANSHEE </p>
      <p>
        Banshees são mulheres (apenas) também são conhecidas como Sacerdotisas
        da Morte ou Percursoras da Morte.
      </p>
      <p>
        Passada de geração em geração, essas mulheres têm conexão com a morte,
        podendo sentí-la e até prevê-la.
      </p>
      <p>
        Sua habilidade natural é o grito capaz de estourar até a caixa craniana
        de seu alvo.
      </p>
      <p>
        Habilidades: <span className="underline">Destreza</span> e{' '}
        <span className="underline">Inteligência</span>.
      </p>
      <p>
        Poderes: <span className="underline">Adivinhação</span>,{' '}
        <span className="underline">Controle do Grito</span>,{' '}
        <span className="underline">Premonição</span> e{' '}
        <span className="underline">Sentido de Morte</span>.
      </p>
    </div>
  )
}

function Hibrido() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> HÍBRIDO </p>
      <p>
        Híbridos são filhos de pais de raças diferentes que, por algum milagre
        genético, conseguiram ser concebidos.
      </p>
      <p>
        A loteria da genética pode premiar a prole de membros de duas raças
        distintas com ao menos uma das raças.
      </p>
      <p>
        Exemplo: A prole de lobisomem com arcano pode nascer só lobisomem, só
        arcano ou ambos.
      </p>
      <p>
        Não existe a possibilidade de a prole nascer humana (ou seja, sem
        poderes), mesmo que um dos pais seja humano.
      </p>
      <p className="font-bold">!!! IMPORTANTE !!!</p>
      <p>
        Kanimas não são capazes de reproduzir enquanto não resolverem suas
        questões.
      </p>
      <p>
        Kitsunes não geram híbridos, ou a prole nasce Kitsune ou nasce com a
        raça do outro genitor.
      </p>
      <p>Vampiros não podem se reproduzir com Lobisomens.</p>
      <p>
        Habilidades e Poderes:{' '}
        <span className="underline">
          Todas as habilidades e poderes das raças de seus pais biológicos
        </span>
        .
      </p>
    </div>
  )
}

function Humano() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> HUMANO </p>
      <p>
        Humanos são os que não possuem poderes, mas possuem muita força de
        vontade para tentar se igualar às outras raças.
      </p>
      <p>
        Eles não estudam na Afrikan Gelernejo e a maioria têm ódio dos outros
        sem nunca ter visto um pessoalmente.
      </p>
      <p>
        Habilidades: <span className="underline">Destreza</span> e{' '}
        <span className="underline">Inteligência</span>.
      </p>
    </div>
  )
}

function Kanima() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> KANIMA </p>
      <p>
        Transformado por um Lobisomem, um Kanima é uma mutação que não permite
        transformação completa em Lobisomem até resolver algo de seu passado.
      </p>
      <p>
        Possuindo as mesmas habilidades dos Lobisomens, o Kanima quando se
        transforma tem seu corpo coberto por escamas, uma cauda longa e
        preênsil, pode subir em paredes como algumas variedades de lagartos,
        além de garras longas e venenosas com um paralisante capaz de
        incapacitar sua vítima por horas.
      </p>
      <p>
        Kanimas não são capazes de gerar filhos até que resolva seu passado e se
        transforme completamente em Lobisomem.
      </p>
      <p>
        Ao ser mordido por um Lobisomem, sendo de outra raça, a pessoa perde os
        poderes anteriores e se transforma em Kanima (se tiver alguma questão
        não resolvida).
      </p>
      <p>
        Habilidades: <span className="underline">Carisma</span>,{' '}
        <span className="underline">Destreza</span>,{' '}
        <span className="underline">Força</span> e{' '}
        <span className="underline">Resistência</span>.
      </p>
      <p>
        {' '}
        Poderes: <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Regeneração</span>,{' '}
        <span className="underline">Sentidos Aguçados</span> e{' '}
        <span className="underline">Veneno Paralisante</span>.
      </p>
    </div>
  )
}

function Kitsune() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> KITSUNE </p>
      <p>
        Kitunes são pessoas que necessariamente descendem de outro Kitsune (um
        ou dois genitores) e carregam consigo espíritos de raposas de nove
        caudas que geram fogo e/ou relâmpago de suas caudas ou boca.
      </p>
      <p>
        Em sua forma humana são muito bonites e charmoses, podendo ser de
        qualquer gênero.
      </p>
      <p>
        Kitsunes despertam quando chegam à puberdade e imediatamente ficam fora
        de controle, mas com pouco tempo de treinamento são capazes de voltarem
        a socializar sem causar riscos aos outros, apesar de ainda ter chance de
        perder de controle com emoções fortes.
      </p>
      <p>
        Sua aura é linda, mas feroz quando atiçada. Normalmente o controle
        básico é ensinado de geração a geração.
      </p>
      <p>
        Habilidades: <span className="underline">Carisma (2)</span>,{' '}
        <span className="underline">Destreza</span>,{' '}
        <span className="underline">Força</span> e{' '}
        <span className="underline">Resistência</span>.
      </p>
      <p>
        Poderes: <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Manipulação Elemental (Fogo)</span>,{' '}
        <span className="underline">Mudar Forma (Raposa de 9 Caudas)</span> e{' '}
        <span className="underline">Regeneração</span>.
      </p>
    </div>
  )
}

function Lobisomem() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> LOBISOMEM </p>
      <p>
        Lobisomens são transformados por outro Lobisomem ou concebidos por pelo
        menos um deles.
      </p>
      <p>
        Quando calmos, os lobisomens se parecem com os humanos, mas se sentem
        raiva ou propositalmente causam sua transformação aparecem orelhas
        pontudas, garras, presas e aumento dos pelos faciais e corporais.
      </p>
      <p>
        Ao ser mordido por um Lobisomem, sendo de outra raça, a pessoa se torna
        híbrida caso não tenha nenhuma questão a ser resolvida de seu passado.
      </p>
      <p>
        Habilidades: <span className="underline">Carisma</span>,{' '}
        <span className="underline">Destreza</span>,{' '}
        <span className="underline">Força</span> e{' '}
        <span className="underline">Resistência</span>.
      </p>
      <p>
        Poderes: <span className="underline">Absorção de Dor</span>,{' '}
        <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Regeneração</span> e{' '}
        <span className="underline">Sentidos Aguçados</span>.
      </p>
    </div>
  )
}

function Transmorfo() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> TRANSMORFO </p>
      <p>
        O transmorfo é capaz de se transformar por completo em um animal,
        mantendo o controle das próprias ações.
      </p>
      <p>
        Antes da puberdade (cerca de 12 anos) ele pode se transformar qualquer
        animal e depois disso se fixa em apenas um que reflete sua
        personalidade.
      </p>
      <p>
        Até ter o controle da transformação, ela ocorre quando as emoções são
        fortes (principalmente raiva e medo).
      </p>
      <p>
        Habilidade: O transmorfo possui a habilidade do animal em que se
        transforma, <span className="font-bold">por exemplo</span> se você vira
        uma coruja você ganha Sabedoria +2.
      </p>
      <p>
        Poderes: <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Mudar Forma</span>,{' '}
        <span className="underline">Regeneração</span> e{' '}
        <span className="underline">Sentidos Aguçados</span>.
      </p>
    </div>
  )
}

function Vampiro() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> VAMPIRO </p>
      <p>
        Vampiros são normalmente criaturas noturnas, transformadas por outro de
        sua raça ou nascido de um humano com um vampiro e sua longevidade não os
        tornam imortais.
      </p>
      <p>
        São predadores dos humanos e eternamente rivais dos lobisomens, não
        sendo necessário mais do que a presença de ambos no mesmo ambiente para
        causar desde desconforto nos que estão próximos à brigas horríveis.
      </p>
      <p>
        Seus caninos afiados estão prontos para se alimentarem a qualquer
        momento e, mesmo com certo controle, não precisam de mais do que 1 litro
        de sangue humano por semana (que pode ser encontrado na #enfermaria).
      </p>
      <p>
        Sua saliva é capaz de curar pequenos ferimentos em si e nos outros e com
        a ajuda do nanotraje conseguem frequentar as aulas com os demais alunos
        (trocando a noite pelo dia).
      </p>
      <p>
        Se for mordida por um Vampiro, sendo de outra raça, a pessoa se torna
        híbrida.
      </p>
      <p>
        Habilidades: <span className="underline">Carisma</span>,{' '}
        <span className="underline">Destreza</span>,{' '}
        <span className="underline">Força</span> e{' '}
        <span className="underline">Resistência</span>.
      </p>
      <p>
        Poderes: <span className="underline">Longevidade</span>,{' '}
        <span className="underline">Regeneração</span>,{' '}
        <span className="underline">Saliva Cicatrizante</span> e{' '}
        <span className="underline">Sentidos Aguçados</span>.
      </p>
    </div>
  )
}

function Wiccaniano() {
  return (
    <div className="space-y-8">
      <p className="font-bold italic"> WICCANIANO </p>
      <p>
        Um Wiccaniano nasce com seus poderes e os desenvolve desde seu primeiro
        suspiro na terra, conseguindo desenvolverem sozinhos até certo ponto por
        serem autodidatas, mas precisam do auxílio de outro Wiccaniano mais
        experiente para chegarem à níveis inimagináveis de poder.
      </p>
      <p>
        Logo na primeira infância descobrem Telecinese, Manipulação Elemental de
        2 elementos e Eletrocinese em níveis baixos.
      </p>
      <p>
        Com a puberdade seus poderes aumentam e desbloqueiam Manipulação
        Elemental de outros elementos, Invisibilidade e Teletransporte, mas
        precisam de muito treinamento para dominar todos os poderes.
      </p>
      <p>
        Possuem forma humana sem distinções e seus poderes só passam
        geneticamente se os dois pais forem da mesma raça.
      </p>
      <p>
        Habilidade: <span className="underline">Sabedoria (2)</span>.
      </p>
      <p>
        Poderes: <span className="underline">Eletrocinese</span>,{' '}
        <span className="underline">Invisibilidade</span>,{' '}
        <span className="underline">Telecinese</span>,{' '}
        <span className="underline">Teletransporte</span>.
      </p>
    </div>
  )
}
