import { Discord, Quote } from '../components/Mods'

export default function Intern() {
  return (
    <div className="flex flex-col laptop:w-[80%] mx-auto">
      <p className="text-6xl mini:text-5xl mb-8 mx-auto">Vagas de Estágio</p>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p>
          O estágio é a aplicação dos conhecimentos do estudante em problemas
          relevantes no momento, aprendendo mais sobre uma profissão, sobre
          responsabilidade e quem sabe se desenvolver mais.
        </p>
        <p>
          O estágio é <span className="underline">opcional</span> à partir dos
          15 anos (idade real).
        </p>
        <p>
          O estágio é <span className="underline">opcional</span> à partir dos
          17 anos (idade real) com remuneração de MGA 80.000 (oitenta mil Ariary
          de Madagascar) por semana trabalhada.
        </p>
        <p>
          O estágio é <span className="underline">obrigatório</span> à partir
          dos 20 anos (idade real) com remuneração de MGA 120.000 (cento e vinte
          mil Ariary de Madagascar) por semana trabalhada.
        </p>
        <p>
          Os pagamentos serão realizados diretamente na conta bancária do
          estudante que realizar a atividade corretamente.
        </p>
        <p>
          Para receber o valor, é necessário realizar uma cena com começo, meio
          e fim, adicionando a frase &quot;CENA PARA ESTÁGIO&quot; em spoiler no
          final da postagem:{' '}
          {window.innerWidth >= 768 && <Quote>|| CENA PARA ESTÁGIO ||</Quote>}
        </p>
        {window.innerWidth < 768 && (
          <p className="text-center">
            <Quote>|| CENA PARA ESTÁGIO ||</Quote>
          </p>
        )}
        <p>
          E lançar um dado no <Discord>#rolagem-de-dados</Discord>:{' '}
          {window.innerWidth >= 768 && (
            <Quote>
              /roll notation:1d100*HORAS title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          )}
        </p>
        {window.innerWidth < 768 && (
          <p className="text-xl leading-10">
            <Quote>
              /roll notation:1d100*HORAS title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          </p>
        )}
        <p>
          Cada função tem seus próprios atributos, escolha o cargo que melhor
          convir para o seu personagem e se inscreva na{' '}
          <Discord>#sala-do-diretor</Discord>.
        </p>
        <p>
          Ps: Caso você acredite que algum outro estágio seja interessante para
          o jogo, não hesite em sugerir à um ADM no privado ou no{' '}
          {window.innerWidth < 768 && <Discord>#🐾sugestões</Discord>}
        </p>
        {window.innerWidth >= 768 && <Discord>#🐾sugestões</Discord>}
      </div>

      <div className="m-auto text-justify w-full gap-12 pb-5 mb-10 space-y-4">
        <p className="font-bold italic">Auxiliar de Professor</p>
        <p>
          Função: Auxiliar os professores durante as aulas das disciplinas
          obrigatórias em que participa ajudando os colegas em quaisquer dúvidas
          que eventualmente venham a ter.
        </p>
        <p>
          OBS: O aluno precisa fazer sua aula normalmente e ajudar os colegas
          quando preciso. Apenas 1 aula/hora por semana (OFF) deverá ser ocupada
          com esta função; disciplina em que praticará a função: à escolha.
        </p>

        <p>
          Lançamento de Dados:{' '}
          {window.innerWidth >= 768 && (
            <Quote>
              /roll notation:1d100*1 title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          )}
        </p>
        {window.innerWidth < 768 && (
          <p className="text-xl leading-10">
            <Quote>
              /roll notation:1d100*1 title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          </p>
        )}
        <p>
          Atributos Desenvolvidos: Carisma, Inteligência, Sabedoria e a
          disciplina em que auxiliará o professor. 1 vaga para cada disciplina.
        </p>

        <p>
          • Árabe - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Biologia - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Educação Física - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Empreendedorismo - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Filosofia - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Física - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Inglês - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Iorubá - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Matemática - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Negócios - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Português - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Química - <span className="font-bold italic">vago</span>
        </p>
        <p>
          • Sociologia - <span className="font-bold italic">vago</span>
        </p>
      </div>

      <div className="m-auto text-justify w-full gap-12 pb-5 space-y-4">
        <p className="font-bold italic">Auxiliar de CEO, COO, CTO ou CMO</p>
        <p>
          Função: Ler e responder emails, manter contato com seus chefes e
          passar informações relevantes ao trabalho de seus respectivos chefes.
        </p>
        <p>
          <span className="underline">CEO</span>: Diretor Executivo responsável
          por criar estratégias, definir metas e colaborar com o conselho
          executivo.
        </p>
        <p>
          <span className="underline">COO</span>: Diretor de Operações
          supervisiona as operações diárias dentro de uma organização. Seus
          deveres podem incluir a criação de procedimentos, a supervisão de
          profissionais executivos em uma variedade de departamentos e a
          elaboração de estratégias de negócios.
        </p>
        <p>
          <span className="underline">CTO</span>: Diretor de Tecnologia
          responsável por decisões executivas de tecnologia dentro de uma
          empresa. Seus deveres podem incluir a concepção de uma estratégia de
          pesquisa e desenvolvimento de longo prazo, a concepção de planos para
          avanços tecnológicos e o gerenciamento de um orçamento para as
          necessidades de tecnologia dentro da empresa.
        </p>
        <p>
          <span className="underline">CMO</span>: Diretor de Marketing
          responsável por decisões de marketing em uma organização. Seu
          principal objetivo é aumentar as vendas ou a receita por meio de
          anúncios e campanhas de marketing. Suas responsabilidades diárias
          podem incluir liderar equipes de pesquisa de mercado, gerenciar as
          estratégias de marca de uma empresa e supervisionar as comunicações
          internas e externas.
        </p>
        <p>OBS: 1 hora de trabalho por dia, de Segunda à Sexta.</p>
        <p>
          OBS²: Pode ser realizado no horário de estudo ou no horário livre.
        </p>
        <p>
          Lançamento de Dados:{' '}
          {window.innerWidth >= 768 && (
            <Quote>
              /roll notation:1d100*5 title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          )}
        </p>
        {window.innerWidth < 768 && (
          <p className="text-xl leading-10">
            <Quote>
              /roll notation:1d100*5 title:Estágio (NOME_DO_PERSONAGEM)
            </Quote>
          </p>
        )}
        <p>
          Requisitos: Carisma Nível 1, Inteligência Nível 2, Idade Real 16 anos.
        </p>
        <p>
          Atributos Desenvolvidos: Carisma, Inteligência, Empreendedorismo e
          Negócios. 1 vaga por empresa.
        </p>
        <p>
          Afrikan Gelernejo (CEO) -{' '}
          <span className="font-bold italic">vago</span>
        </p>
        <p>
          Afrikan Gelernejo (COO) -{' '}
          <span className="font-bold italic">vago</span>
        </p>
        <p>
          Afrikan Gelernejo (CTO) -{' '}
          <span className="font-bold italic">vago</span>
        </p>
        <p>
          Afrikan Gelernejo (CMO) -{' '}
          <span className="font-bold italic">vago</span>
        </p>
      </div>
    </div>
  )
}
