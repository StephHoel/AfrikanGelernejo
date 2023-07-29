import Toggle from '../../components/Toggle'

export default function Habilities() {
  return (
    <Toggle title="8. Habilidades">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify mb-10">
        <p>
          <span className="underline italic">8.</span>
          <span className="font-bold italic"> Habilidades </span>
        </p>
        <p>
          Todos os personagens começam com essas características, uns com mais,
          outros menos. O nível 0 (zero) não quer dizer que você é um inútil,
          mas sim que você está na média.
        </p>
        <p>
          As Habilidades são: <span className="underline">Carisma</span>,{' '}
          <span className="underline">Destreza</span>,{' '}
          <span className="underline">Força</span>,{' '}
          <span className="underline">Inteligência</span>,{' '}
          <span className="underline">Resistência</span> e{' '}
          <span className="underline">Sabedoria</span>.
        </p>

        <p className="font-bold italic"> Carisma </p>
        <p>
          O carisma mede sua força de personalidade, magnetismo pessoal, charme,
          simpatia, capacidade de persuasão e beleza física. Seu modificador de
          Carisma será aplicado em testes como Atuação, Diplomacia, Enganação,
          Intimidação e Obter Informação; ou seja: qualquer teste envolvendo
          influenciar outras pessoas ou criaturas.
        </p>
        <p className="font-bold italic"> Destreza </p>
        <p>
          A destreza mede agilidade, reflexos, equilíbrio e coordenação motora.
          O modificador de Destreza será aplicado nos lançamentos de ataque à
          distância; testes de Reflexos; testes de Acrobacia, Iniciativa e
          Furtividade.
        </p>
        <p className="font-bold italic"> Força </p>
        <p>
          A força mede seu poder muscular, sua força física. O modificador de
          Força será aplicado nos lançamentos de ataque corpo-a-corpo; testes de
          Atletismo; testes de Força para levantar peso, quebrar objetos e atos
          similares.
        </p>
        <p className="font-bold italic"> Inteligência </p>
        <p>
          A inteligência é a capacidade de pensar, raciocinar e resolver
          problemas. Você aplicará o modificador de Inteligência a testes de
          aprendizagem e raciocínio.
        </p>
        <p className="font-bold italic"> Resistência </p>
        <p>
          A saúde e vigor físico são representados pela Resistência. Seu
          modificador será aplicado em testes para jogar uma partida inteira,
          para prender o fôlego e atos similares.
        </p>
        <p className="font-bold italic"> Sabedoria </p>
        <p>
          A sabedoria representa a percepção e a força de vontade, além de seu
          bom senso e intuição. Não é a mesma coisa que Inteligência: enquanto a
          Inteligência determina a capacidade de aprendizado e raciocínio, a
          Sabedoria diz como você percebe o mundo e a si mesmo. Um monge isolado
          nas montanhas que não sabe ler e nunca teve contato com qualquer
          cultura, pode ter alta Sabedoria e baixa Inteligência, enquanto um
          pesquisador muito distraído teria alta Inteligência e baixa Sabedoria.
          O modificador de Sabedoria será aplicado em testes de Vontade; testes
          de Cura, Intuição, Percepção e Sobrevivência.
        </p>
      </div>
    </Toggle>
  )
}
