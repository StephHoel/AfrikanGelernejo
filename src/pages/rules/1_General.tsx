import Toggle from '../../components/Toggle'
import { Discord } from '../../components/Mods'

export default function General() {
  return (
    <Toggle title="1. Regras Gerais">
      <div className="w-full flex flex-col m-auto text-justify mb-10 space-y-8">
        <span>
          <span className="underline italic">1.</span>
          <span className="font-bold italic"> Regras Gerais</span>
        </span>

        <span>
          <span className="underline italic">1.1.</span>
          <span className="font-bold italic"> Ofensas:</span>
        </span>

        <span>
          Proibido ofensas entre os jogadores, xingamentos e qualquer forma de
          discriminação. Se houver algum problema com outro jogador, resolva com
          educação. Não somos crianças e podemos resolver nossos problemas
          civilizadamente. Quero frisar bem esse aviso: se ofender alguém, mesmo
          que esteja com a razão, será advertido e banido.
          <span className="font-bold">
            É inadmissível a falta de educação nesse servidor!
          </span>
        </span>

        <span>
          Para essa regra não há meio termo. Comentários feitos em qualquer
          lugar que discriminem sexo, religião, orientação sexual ou qualquer
          outro aspecto de um ou mais jogadores não serão tolerados; um (1)
          aviso será feito por Mensagem Privada ao jogador responsável pela
          discriminação. Caso reincida, será banido permanentemente. On é on e
          off é off, isso aqui é só um jogo. Se você se desentendeu com o
          personagem de alguém durante o jogo, não leve isso para o lado pessoal
          ou vice-versa.
        </span>

        <span>
          <span className="underline italic">1.2.</span>
          <span className="font-bold italic"> Propaganda:</span>
        </span>

        <span>
          Se quiser fazer propaganda de algum outro RPG, servidor, site, ou seja
          lá o que for, independente de ser sobre o mesmo tema ou não, peça à
          uma das @ADM no privado e só divulgue caso seja autorizado.
        </span>

        <span>
          Caso seja identificada mensagens sem autorização ou com autorização
          falsa, o jogador será penalizado em uma (1) semana sem participar
          ativamente do servidor.
        </span>

        <span>
          <span className="underline italic">1.3.</span>
          <span className="font-bold italic"> Cenas +18:</span>
        </span>

        <span>
          Ninguém é obrigado a ler cenas +18 (seja de conteúdo sexual ou não),
          portanto pedimos que seja informado no começo de cada postagem e usado
          a função spoiler do discord durante todo o trecho que houver tais
          cenas.
        </span>

        <span>
          Outra opção é que seja criado um tópico privado para a realização
          deste tipo de cena. Nesse tipo de tópico, apenas ADM e jogadores
          envolvidos poderão vê-lo.
        </span>

        <span>
          <span className="font-bold underline">
            Entretanto, não encorajamos que as cenas sejam explícitas.
          </span>
        </span>

        <span>
          <span className="underline italic">1.4.</span>
          <span className="font-bold italic"> Personagens:</span>
        </span>

        <span>
          É obrigatório ter pelo menos um nome e um sobrenome. Caso queira usar
          um sobrenome que já esteja sendo usado no jogo, combine com o dono
          como você pode encaixar seu personagem na família. O jogo aborda o
          tema sobrenatural, mas evite criar histórias fantasiosas demais até
          para nossa trama.
        </span>

        <span>
          O jogador será notificado caso seja identificada irregularidade com o
          nome e sua matrícula só será avaliada após o mesmo ser regularizado.
        </span>

        <span>
          <span className="underline italic">1.5.</span>
          <span className="font-bold italic"> Avatares:</span>
        </span>

        <span>
          Dois personagens não podem usar o mesmo artista (salvo em caso de
          gêmeos ou explicação na ficha). Lembre-se de que o avatar representa
          mais ou menos como é o seu personagem fisicamente e por isso se duas
          pessoas usam o mesmo artista significa que os personagens são
          idênticos fisicamente.
        </span>

        <span>
          <span className="underline italic">1.6.</span>
          <span className="font-bold italic"> Postagem:</span>
        </span>

        <span>
          Para mantermos a organização no servidor, optamos por fazer da
          seguinte forma: para começar uma cena/trama/postagem basta criar um
          tópico com o nome que quiser e realizar toda sua cena dentro dele.
        </span>

        <span>
          Assim mantemos a descrição de cada canal visível para todos os
          jogadores, sem problemas.
        </span>

        <span>
          <span className="font-bold italic">Discord no navegador</span>
        </span>

        <span>
          Se você estiver usando o discord no{' '}
          <span className="underline">navegador</span>, você vai ver na parte
          superior um # com balão de conversa.
        </span>

        <span>
          Clicando nele há a opção de criar um novo tópico onde você pode
          escolher o nome do tópico e definir se ele será público ou privado,
          lembrando que tópicos públicos são acessados por todos os membros do
          servidor.
        </span>

        <span>
          <span className="font-bold italic">Discord no celular</span>
        </span>

        <span>
          Se você estiver usando o discord no{' '}
          <span className="underline">celular</span>, você precisa clicar no
          canto superior direito da tela no ícone de dois bonequinhos
          sobrepostos que abrirá a lista de membros.
        </span>

        <span>
          Uma vez com esta lista aberta, você vai encontrar o # com balão de
          conversa, onde ao clicar, você terá a possiblidade de criar um novo
          tópico.
        </span>

        <span>
          Basta escolher o nome do tópico e definir se ele será público ou
          privado, lembrando que tópicos públicos são acessados por todos os
          membros do servidor.
        </span>

        <span>
          <span className="underline italic">1.7.</span>
          <span className="font-bold italic"> Próximos passos:</span>
        </span>

        <span>
          Você precisa fazer a matrícula do seu personagem antes de começar a
          criar cenas com ele, para isso no canal{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #modelo-de-ficha
          </span>{' '}
          você consegue encontrar as instruções.
        </span>

        <span>
          OBS: A matrícula também se aplica à personagens formados, mesmo que
          este não vá frequentar a Afrikan Gelernejo.
        </span>

        <span>
          Depois da matrícula ser aprovada, você precisa registrar seu
          personagem no bot (seja pelo site, seja pelo canal{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #registro-de-personagem
          </span>{' '}
          onde você consegue ver o tutorial de como fazer o registro nas
          mensagens fixadas).
        </span>

        <span>
          Com seu personagem registrado e aprovado, há dois caminhos que você
          pode seguir, a depender de cada caso.
        </span>

        <span>- Aluno:</span>
        <span>
          * Visitar a <Discord>#secretaria</Discord> para se inscrever nas
          atividades opcionais que desejar cursar;
        </span>

        <span>
          * Visitar a <Discord>#sala-do-diretor</Discord> para se inscrever em
          um estágio (obrigatório acima da idade real de 17 anos).
        </span>

        <span>- Formado:</span>
        <span>
          * Visitar a <Discord>#central-de-empregos</Discord> para se candidatar
          à um emprego fixo ou verificar o tópico{' '}
          <Discord>#11.2. Vagas de Emprego Sem Vínculo</Discord> para empregos
          temporários.
        </span>

        <span>
          Todos começam com certa quantia no banco e dela precisam para algumas
          coisas em nosso RPG, como comprar casas e níveis de EXP.
        </span>
      </div>
    </Toggle>
  )
}
