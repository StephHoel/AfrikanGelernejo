import { Discord, Quote } from '../../components/Mods'
import Toggle from '../../components/Toggle'

export default function School() {
  return (
    <Toggle title="2. Regras Escolares">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify mb-10">
        <span>
          <span className="underline italic">2.</span>
          <span className="font-bold italic"> Regras Escolares </span>
        </span>

        <span>
          <span className="underline italic">2.1.</span>
          <span className="font-bold italic"> Matrícula: </span>
        </span>

        <span>
          Os jogadores poderão ver os canais de texto destinados às cenas assim
          que a primeira ficha for aprovada. O modelo de ficha pode ser
          encontrado no canal{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #modelo-de-ficha
          </span>{' '}
          assim como a forma de registrar seu personagem (aluno ou não).
        </span>

        <span>
          Caso sua ficha seja reprovada por qualquer motivo, um ADM irá avisar
          no mesmo tópico quais correções precisam ser feitas para ser aprovada.
          A ficha alterada deve ser enviada novamente e{' '}
          <span className="font-bold">não</span> editada.
        </span>

        <span>
          Caso você queira fazer mais de um personagem, não temos problema com
          isso. Apenas pedimos que tenha consciência de que todos os personagens
          precisam ser ativos.
        </span>

        <span>
          <span className="underline italic">2.2.</span>
          <span className="font-bold italic"> Escola: </span>
        </span>

        <span>
          A matrícula na
          <span className="font-bold">Afrikan Gelernejo</span>
          pode ser feita a partir da idade real de 12 anos e não tem limite
          máximo. Os estudantes, uma vez matriculados, precisam ter aprovação de
          pelo menos 6 anos letivos para serem considerados formados. Isto é, se
          formam com no mínimo 18 anos reais.
        </span>

        <span>
          Como a escola fica em Madagáscar, as aulas começam no primeiro dia
          útil de Março com a chegada dos alunos no dia anterior. As férias
          começam no primeiro dia de Dezembro, quando os alunos voltam para suas
          casas, e não há recesso no meio do ano.
        </span>

        <span>
          Os alunos possuem um cronograma a seguir, sendo este a indicação
          máxima de treinamentos que podem realizar na semana (cada hora de aula
          bonifica o aluno com certa quantidade de experiência em atributos
          específicos).
        </span>

        <span>
          <span className="underline">
            Apenas alunos maiores de 16 anos (idade real) estão autorizados à
            saírem da escola aos finais de semana sem supervisão.
          </span>{' '}
          <span className="italic">
            Os mais novos podem sair com seus irmãos maiores de 16 anos ou com
            os pais
          </span>{' '}
          (caso o busque na escola). Em qualquer caso, todos os alunos precisam
          estar de volta à <span className="font-bold">Afrikan Gelernejo</span>{' '}
          antes do toque de recolher de domingo.
        </span>

        <span>
          <span className="underline italic">2.3.</span>{' '}
          <span className="font-bold italic">
            Disciplinas e Pontos de Experiência:
          </span>
        </span>

        <span>
          Cada disciplina confere pontos de experiência (EXP) ao ser realizada,
          além de conferir pontos na própria disciplina, também confere EXP em
          certos atributos conforme explicação abaixo:
        </span>

        <span className="font-bold italic">Nas disciplinas obrigatórias: </span>

        <span>
          - Educação Física:
          <span className="italic"> Força, Resistência e Destreza; </span>
        </span>

        <span>
          - Idiomas/Negócios (Economia e Empreendedorismo):
          <span className="italic"> Inteligência, Sabedoria, Jornalismo; </span>
        </span>

        <span>
          - Matemática:
          <span className="italic"> Sabedoria; </span>
        </span>

        <span>
          - Sociologia/Filosofia:
          <span className="italic"> Carisma, Sabedoria e Inteligência; </span>
        </span>

        <span>
          - Biologia/Física/Química:
          <span className="italic">Inteligência, Sabedoria e Resistência.</span>
        </span>

        <span className="font-bold italic"> Nas disciplinas opcionais: </span>

        <span>
          - Danças:
          <span className="italic"> Carisma, Destreza e Força; </span>
        </span>

        <span>
          - Artes Cênicas:
          <span className="italic"> Carisma e Força; </span>
        </span>

        <span>
          - Instrumentos Musicais, Esportes de Quadra e Patinação Artística no
          Gelo:
          <span className="italic"> Destreza e Resistência; </span>
        </span>

        <span>
          - Esportes de Grama, Lutas Hóquei no Gelo:
          <span className="italic"> Força e Resistência; </span>
        </span>

        <span>
          - Atletismo:
          <span className="italic"> Destreza; </span>
        </span>

        <span>
          - Esportes Aquáticos:
          <span className="italic"> Resistência; </span>
        </span>

        <span>
          - Demais Atividades:
          <span className="italic"> Inteligência. </span>
        </span>

        <span>
          Cada aula obrigatória tem duração de 1 hora/semana, totalizando 13
          disciplinas. As aulas e atividades opcionais ficam à cargo do aluno se
          inscrever na{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #secretaria
          </span>
          .
        </span>

        <span>
          A{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #academia
          </span>{' '}
          pode ser frequentada em todo e qualquer tempo livre que o aluno tiver
          (limitado às horas livres disponíveis por semana), conferindo à este
          EXP em
          <span className="italic"> Força</span>.
        </span>

        <span className="font-bold italic">
          Mas o que preciso fazer para conseguir esses pontos?
        </span>

        <span>
          Apesar de ser liberado a criação de cenas nas salas de aulas, estas
          não são necessárias para que o aluno ganhe EXP.
        </span>

        <span>
          Basta apenas rolar o dado no canal{' '}
          <span className="bg-[#504eee80] rounded py-[1px] px-[5px]">
            #rolagem-de-dados
          </span>{' '}
          com o comando abaixo.
        </span>

        <Quote>
          /roll notation:1d100*MOD*HORAS title:ATIVIDADE (PERSONAGEM)
        </Quote>

        <span>Altere as palavras em maiúscula conforme abaixo:</span>

        <span>
          <span className="font-bold">ATIVIDADE</span> = nome da atividade que
          seu personagem está executando
        </span>

        <span>
          <span className="font-bold">MOD</span> = modificador por atividade
          (explicação abaixo)
        </span>

        <span>
          <span className="font-bold">HORAS</span> = quantidade de horas que
          está executando
        </span>

        <span>
          <span className="font-bold">PERSONAGEM</span> = nome do seu personagem
        </span>

        <span>Deve ficar parecido com o exemplo abaixo:</span>

        <Quote>/roll notation:1d100*1*1 title:Aula de Negócios (Kawan)</Quote>

        <span className="font-bold italic">Modificadores por atividades: </span>

        <span>
          - Disciplinas Obrigatórias:
          <span className="font-bold"> MOD = 1 </span>
        </span>

        <span>
          - Treinamentos de Raça/Grupo:
          <span className="font-bold"> MOD = 2 </span>
        </span>

        <span>
          - Disciplinas Opcionais/Esportes:
          <span className="font-bold"> MOD = 4 </span>
        </span>

        <span>Exemplo de como ficaria:</span>

        <Quote>/roll notation:1d100*1*1 title:Aula de Negócios (Kawan)</Quote>

        <Quote>
          /roll notation:1d100*2*1 title:Treinamento de Raça (Kawan)
        </Quote>

        <Quote>
          /roll notation:1d100*2*4 title:Treinamento em Grupo (Kawan)
        </Quote>

        <Quote>/roll notation:1d100*4*3 title:Basquete (Kawan)</Quote>

        <span>
          <span className="underline italic">2.4.</span>
          <span className="font-bold italic"> Estágio: </span>
        </span>

        <span>
          O estágio é a aplicação dos conhecimentos do estudante em problemas
          relevantes no momento. Alunos à partir dos 15 anos (idade real) podem
          escolher fazer ou não estágio, passando a ser{' '}
          <span className="underline">obrigatório</span> à partir dos 20 anos
          (idade real).
        </span>

        <span>
          O estágio é <span className="underline">opcional</span> à partir dos
          17 anos (idade real) com remuneração de MGA 80.000 (oitenta mil Ariary
          de Madagascar) por semana trabalhada.
        </span>

        <span>
          O estágio é <span className="underline">obrigatório</span> à partir
          dos 20 anos (idade real) com remuneração de MGA 120.000 (cento e vinte
          mil Ariary de Madagascar) por semana trabalhada.
        </span>

        <span>
          Para receber o valor, é necessário realizar uma cena com começo, meio
          e fim, adicionando a frase &quot;CENA PARA ESTÁGIO&quot; em spoiler no
          final da postagem, como no exemplo abaixo:
        </span>

        <Quote>|| CENA PARA ESTÁGIO ||</Quote>

        <span>
          E lançar um dado no <Discord>#rolagem-de-dados</Discord>:
        </span>

        <Quote>/roll notation:1d100 title:Estágio (NOME_DO_PERSONAGEM)</Quote>

        <span>
          O estágio pode ser feito para a empresa da família ou para outra
          empresa, ficando a cargo do aluno a escolha e a correta inscrição, que
          poderá ser feita na <Discord>#sala-do-diretor</Discord>.
        </span>

        <span>
          <span className="underline italic">2.5.</span>
          <span className="font-bold italic"> Universidade: </span>
        </span>

        <span>
          Se houver interessados, em breve podemos trazer mais sobre a
          universidade...
        </span>
      </div>
    </Toggle>
  )
}
