import { Discord, Quote } from '../../components/Mods'
import Toggle from '../../components/Toggle'

export default function ClassesAndExperiences() {
  return (
    <Toggle title="4. Aulas e Experiências">
      <div className="text-justify mb-10 w-full flex flex-col m-auto space-y-8">
        <p>
          <span className="underline italic">4.</span>
          <span className="font-bold italic"> Aulas e Experiências </span>
        </p>

        <p>
          <span className="underline italic">4.1.</span>
          <span className="font-bold italic"> Sistema de Aulas: </span>
        </p>

        <p>
          As cenas nas aulas não são necessárias, porém para que seu personagem
          evolua, é necessário o lançamento de dados para cada disciplina que
          ele participa, sendo 13 obrigatórias, o treino individual de raça, o
          treino em grupo e tantas outras opcionais. Sobre o lançamento de
          dados, confira o canal <Discord>#📃2-escolares</Discord>.
        </p>

        <span>
          <span className="underline font-bold">
            Isso quer dizer que você precisará lançar mais de 15 dados por
            semana do jogo (ON)?
          </span>{' '}
          Não. Você pode escolher no mínimo 5 disciplinas obrigatórias, os 2
          tipos de treinos (obrigatório lançar dados) e as disciplinas opcionais
          que quiser. Esse é o mínimo para o aluno ser considerado aprovado para
          o próximo ano letivo (ON).
        </span>

        <span>
          <span className="underline font-bold">
            E se eu não lançar os dados?
          </span>{' '}
          Aí seu personagem vai ser reprovado e vai precisar fazer mais 1 ano
          letivo para se formar, além dos que já precisavam.
        </span>

        <span>
          <span className="underline font-bold">
            Quantos anos letivos preciso fazer para ser considerado formado?
          </span>{' '}
          São 6 anos letivos ao todo, que começam a contar no momento em que o
          personagem começa no jogo (tendo ou não estado numa escola
          sobrenatural antes).
        </span>

        <p>
          <span className="underline italic">4.2.</span>
          <span className="font-bold italic"> Como as aulas acontecem:</span>
        </p>

        <p>
          Caso queira desenvolver cenas para algumas das aulas, é importante
          saber que as turmas não são separadas por faixa etária, assim
          permitindo que os alunos façam seus próprios horários e também
          permitindo que os mais novos possam aprender com os mais velhos e
          vice-versa, porporcionando o máximo de aprendizado para todos e
          desenvolvendo o senso de coletividade dos alunos.
        </p>

        <p>
          As aulas obrigatórias são divididas em três momentos: primeiro o
          professor discorre sobre o tema da aula, depois cada aluno tem uma
          tarefa à fazer baseado em sua faixa etária e por último os alunos
          fazem uma pequena apresentação de suas pesquisas sobre o assunto.{' '}
          <span className="underline">DICA</span>: Faça seu personagem auxiliar
          os demais alunos enquanto ele faz a própria pesquisa para a
          apresentação.
        </p>

        <p>
          <span className="underline italic">4.3.</span>{' '}
          <span className="font-bold italic">
            Ganhando pontos de experiência:
          </span>
        </p>

        <p>
          Quanto mais aulas obrigatórias participar, mais pontos de experiência
          e conhecimento o personagem acumulará. Assim que o dado for lançado no
          canal <Discord>#rolagem-de-dados</Discord>, a ADM @Hoel anotará e
          contabilizará os pontos de experiência de cada atributo e disciplina,
          disponibilizando a contagem mais recente na ficha do personagem.
        </p>

        <p>
          Ps: Se houver algum erro, basta avisar (somos humanos e podemos errar
          também).
        </p>

        <p>
          <span className="underline italic">4.4.</span>
          <span className="font-bold italic"> Ficha do Personagem: </span>
        </p>

        <p>
          A ficha do personagem fica no mesmo canal onde a matrícula do seu
          personagem foi aprovada e, além das ADM, só você poderá vê-la. Nele
          você encontrará a lista de atributos, poderes e disciplinas com os
          níveis e experiências correspondentes.
        </p>

        <p>
          <span className="underline italic">4.5.</span>{' '}
          <span className="font-bold italic">
            Quais são as 13 Disciplinas Obrigatórias da Afrikan Gelernejo?
          </span>
        </p>

        <p>Matemática e Educação Física;</p>
        <p>Ciências: Biologia, Física e Química;</p>
        <p>Idiomas: Esperanto, Inglês, Iorubá e Português;</p>
        <p>Negócios: Economia e Empreendedorismo;</p>
        <p>Sociais: Filosofia e Sociologia.</p>

        <p>
          <span className="underline italic">4.6.</span>{' '}
          <span className="font-bold italic">
            Quais são as 36 Disciplinas Opcionais da Afrikan Gelernejo?
          </span>
        </p>

        <p>Danças: Balé, Hip-Hop, Kizomba e Kuduro;</p>
        <p>Esportes Aquáticos: Natação e Polo Aquático;</p>
        <p>Esportes de Grama: Futebol, Hóquei de Grama e Rúgbi;</p>
        <p>Esportes de Quadra: Basquete, Handebol e Vôlei;</p>
        <p>
          Esportes Diversos: Atletismo, Hóquei no Gelo e Patinação Artística no
          Gelo;
        </p>
        <p>Lutas: Capoeira, Esgrima e Luta Livre Olímpica;</p>
        <p>
          Música: Atabaque, Canto, Coral, Flauta Transversa, Piano,
          Violão/Guitarra, Violino, Violoncelo;
        </p>
        <p>
          Outras Atividades: Artes Cênicas (Teatro), Editoração (Anuário e
          Jornal), Escultura, Filmagem, Jornalismo, Montagem Audiovisual,
          Pintura, Produção de Jogos, Programação e Robótica.
        </p>

        <p>
          <span className="underline italic">4.7.</span>
          <span className="font-bold italic"> Avançando de Nível: </span>
        </p>

        <p>
          Os níveis são fundamentais para realizar os testes. Mas, mais
          importante que isso, é saber como aumentá-los. Usamos uma fórmula
          básica:{' '}
          <Quote>500 x Nível Atual = EXP necessário para o próximo nível</Quote>
        </p>

        <p>Nível 0 → 1: 300 EXP;</p>
        <p>Nível 1 → 2: 500 x 1 = 500 EXP;</p>
        <p>Nível 2 → 3: 500 x 2 = 1.000 EXP;</p>
        <p>Nível 3 → 4: 500 x 3 = 1.500 EXP;</p>
        <p>Nível 4 → 5: 500 x 4 = 2.000 EXP; e assim sucessivamente.</p>

        <p>
          <span className="underline italic">4.8.</span>
          <span className="font-bold italic"> Treinamentos: </span>
        </p>

        <p>
          Os treinamentos servem para desenvolver os poderes. Há dois tipos:
          individual e em grupo. O individual é quando indivíduos de apenas uma
          Raça treinam juntos (mesmo que em espaço compartilhado); já em grupo é
          quando todas as raças estão juntas.
        </p>

        <p>
          Cada raça tem seu treinamento específico e em cada dia é desenvolvido
          apenas um (1) poder (salvo quando duas raças têm poderes iguais, que
          os alunos podem treinar com alguém da mesma raça ou de raça
          diferente).
        </p>

        <p>Os locais de treinamentos individuais são:</p>
        <p>Campo de Treinamento: Kanima, Kitsune, Lobisomem e Transmorfo;</p>
        <p>Sala Simulada 1: Arcano e Wiccaniano;</p>
        <p>Sala Simulada 2: Vampiro;</p>
        <p>Sala Vedada: Banshee.</p>

        <p>
          Os Treinamentos de Raça em Grupo geralmente são feitos no campo de
          treinamento, mas podem ser realizados em outros locais, dependendo da
          proposta do treinamento.
        </p>
      </div>
    </Toggle>
  )
}
