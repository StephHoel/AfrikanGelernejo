import { Discord, Quote } from '../../components/Mods'
import Toggle from '../../components/Toggle'

export default function DicesAndAttributes() {
  return (
    <Toggle title="3. Regras dos Dados e Atributos">
      <div className="flex flex-col w-full m-auto space-y-8">
        <p>
          <span className="underline italic">3.</span>
          <span className="font-bold italic">
            {' '}
            Regras dos Dados e Atributos
          </span>
        </p>

        <p>
          <span className="underline italic">3.1.</span>
          <span className="font-bold italic"> Definição: </span>
        </p>

        <p>
          Como em todos os RPGs, algumas ações são definidas por rolagem de dado
          e, de acordo com os resultados, provocam maior ou menor efeito.
          Obviamente, quanto mais altas as características de um personagem,
          maiores suas chances de realizar a ação, no entanto isso não significa
          que seja impossível para um personagem mais fraco realizar, apenas
          será mais difícil.
        </p>

        <p>
          Neste servidor prezamos muito pelo bom senso, ainda mais quando se
          trata do uso dos atributos. Não se esqueça que seu personagem não é
          invencível e nem sempre conseguirá fazer tudo o que foi proposto.
          Descreva sempre o que ele fez, com o máximo de detalhes possíveis e
          não se esqueça de colocar o link do resultado da rolagem de dados (
          <Discord>#rolagem-de-dados</Discord>) em spoiler para justificar sua
          ação (ou conforme o Narrador pedir).
        </p>

        <p>
          <span className="underline italic">3.2.</span>
          <span className="font-bold italic"> Combate: </span>
        </p>

        <p>Usamos o d20 para a maioria das ações, na seguinte fórmula:</p>

        <Quote>AÇÃO = (1d20 + ATR) - (RES do Oponente)</Quote>

        <p>Onde:</p>

        <p>
          <span className="font-bold">ATR</span> = Atributo (que pode ser uma
          habilidade, um poder ou uma perícia)
        </p>

        <p>
          <span className="font-bold">RES</span> = Habilidade Resistência
        </p>

        <p>
          Para cada tipo de ação, um atributo é mais ou menos indicado para tal
          tarefa, fazendo com que a escolha seja bem analisada antes da postagem
          e da rolagem dos dados. Se tiver dúvidas, pergunte à um @ADM no
          privado ou no <Discord>#🗣chat-off</Discord>.
        </p>

        <p>
          Se o atributo escolhido for diferente do descrito, a ação será
          invalidada e caberá ao adversário reportar o equivoco diretamente ao
          jogador para que este faça a correção. Se ele não o fizer, reporte à
          um ADM no privado para que a análise possa ser feita e a correção
          exigida ou realizada.
        </p>

        <p>
          Uma ação pode alcançar diversos valores, até mesmo negativos, caso a
          resistência seja maior do que o ataque. Para saber quanto dano foi
          causado, usamos outra fórmula, esta baseada no valor atingido na AÇÃO.
        </p>

        <p>
          - AÇÃO ≤ 0: Falha Crítica, dano = 5 HP no{' '}
          <span className="underline italic">ATACANTE</span>.
        </p>
        <p>- AÇÃO = 1: Falha, dano = 0.</p>
        <p>- AÇÃO = 2 ou 3: Ação Fraca, dano = ATR.</p>
        <p>- AÇÃO = 4 ou 5: Ação Normal, dano = 2 x ATR.</p>
        <p>- AÇÃO ≥ 6: Ação Forte, dano = 3 x ATR.</p>

        <p>
          OBS: Caso o dado base tenha caído em 1, o{' '}
          <span className="underline italic">ATACANTE</span> perde 2 HP de dano.
        </p>

        <p>
          OBS²: Em combate, seja narrado ou treinamento, os dados tem que ser
          lançados no mesmo canal onde a ação está sendo realizada, logo após a
          ação ser enviada.
        </p>

        <p>
          Embora os jogadores possam lutar entre si sem a presença do Narrador,
          a maioria dos combates ocorrerá contra inimigos indicados pelo
          Narrador. Neste caso, cada jogador lançará o dado por seu personagem e
          o Narrador lançará pelos inimigos.
        </p>

        <p>
          <span className="underline italic">3.3.</span>
          <span className="font-bold italic"> Lutas e Testes: </span>
        </p>

        <p>
          Em determinadas situações, pode ser necessário um teste que será
          pedido pelo Narrador. O teste nada mais é do que um lançamento de
          dados para uma ação fora de combate/luta.
        </p>

        <p>
          Os testes são aplicados à narração por parte do Narrador, mas não
          exclusivamente. Identificada a necessidade, o Narrador pode exigir o
          lançamento de dado para uma ação independente.
        </p>

        <p>
          Qualquer ação pode ser testada, como abrir uma porta trancada, saltar
          de uma árvore, encontrar uma informação em um livro/internet ou até
          mesmo dar um passo (caso esteja em um passo num campo minado).
        </p>

        <p>
          Cada teste tem um valor de dificuldade que o jogador precisa alcançar
          com o lançamento dos dados + atributo definido pelo Narrador. Se o
          valor for abaixo da dificuldade, a ação não é executada. Caso o valor
          seja igual, é executada com dificuldade. Se for maior, é executada
          tranquilamente. O Narrador sempre indicará a dificuldade e o atributo
          de cada teste a ser realizado.
        </p>

        <p>
          Exemplo: Um jogador precisa identificar uma escrita em Alemão, que não
          é ensinado na escola. O Narrador define o Inglês como idioma de
          comparação e pede ao jogador que lance d20+(nível do personagem no
          idioma) para entender o que está escrito, considerando que ele não tem
          acesso ao celular ou internet no momento. A dificuldade é definida em
          3 pela frase curta a ser traduzida. O jogador tem nível 1 em Inglês e
          no dado lançado cai 3, somando o valor de 4. A dificuldade é 3, sendo
          4 maior que 3, o jogador consegue traduzir a frase.
        </p>

        <p>
          <span className="underline italic">3.4.</span>
          <span className="font-bold italic"> Turno e Rodada: </span>
        </p>

        <p>
          Como não há uma forma unificada de precisão na passagem de tempo, para
          atividades que requerem vários jogadores rolando dado, utilizamos como
          padrão o turno e a rodada.
        </p>

        <p>
          O turno é a &quot;sua vez&quot; de jogar, enquanto a rodada é o tempo
          de todos os envolvidos terem seus turnos 1 vez (1 rodada começa no
          primeiro personagem e termina no último, recomeçando no primeiro uma
          nova rodada).
        </p>

        <p>
          No seu turno, seu personagem pode executar até duas ações (uma direta
          e uma indireta).
        </p>

        <p>
          Ação Direta: <span className="italic">Ataque ou Contra-Ataque</span>;
        </p>

        <p>
          Ação Indireta: <span className="italic">Defesa ou Esquiva</span>.
        </p>

        <p>
          <span className="underline italic">3.5.</span>
          <span className="font-bold italic"> Vampiros: </span>
        </p>

        <p>
          Os vampiros têm sua alimentação baseada em sangue, seja humano ou
          animal. 1 litro de sangue humano é capaz de manter um vampiro 1
          semana, enquanto é necessário 3 litros de sangue animal para o mesmo
          período de tempo. A caça predatória é desestimulada dentro e fora do
          campus, tendo a enfermaria como ponto de alimentação sempre que
          necessário.
        </p>

        <p>
          Caso o vampiro não se alimente semanalmente, haverá penalidades nas
          narrações. A mesma deve ser feita na <Discord>#enfermaria</Discord>.
        </p>

        <p>Há penalidades para o vampiro que estiver com o HP abaixo de:</p>

        <p>
          40%: <span className="font-bold">-1</span> em qualquer ação que
          precisar lançar dado.
        </p>

        <p>
          20%: <span className="font-bold">-2</span> em qualquer ação que
          precisar lançar dado.
        </p>

        <p>
          10%: <span className="font-bold">-4</span> em qualquer ação que
          precisar lançar dado +{' '}
          <span className="underline">
            drenagem do sangue do primeiro ser que aparecer na frente do vampiro
          </span>
          .
        </p>

        <p>
          <span className="underline italic">3.6.</span>
          <span className="font-bold italic"> HP zerado: </span>
        </p>

        <p>
          É comum em lutas o HP chegar à zero. Salvo exceções, o padrão é o
          personagem ser levado aos cuidados médicos (seja na enfermaria da
          escola, seja num hospital). O Narrador descreverá o que aconteceu para
          o personagem assim que ele acordar, com o HP completamente recuperado.
          O tempo de recuperação será definido baseado na narração que o levou à
          perder todo o HP.
        </p>

        <p>
          Caso um evento esteja acontecendo no período em que o personagem
          esteve inconsciente e terminar antes dele acordar, o mesmo não poderá
          comparecer à ele.
        </p>

        <p>
          Você pode escolher que seu personagem fique menos tempo se
          recuperando, porém a recuperação será proporcional ao tempo escolhido.
          Basta à um ADM no privado.
        </p>
      </div>
    </Toggle>
  )
}