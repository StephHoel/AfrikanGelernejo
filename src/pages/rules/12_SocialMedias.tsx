import { Discord } from '../../components/Mods'
import Toggle from '../../components/Toggle'

export default function SocialMedias() {
  return (
    <Toggle title="12. Redes Sociais">
      <div className="flex flex-col w-full m-auto space-y-8 text-justify">
        <p>
          Como um ambiente moderno e uma escola que preza a comunicação do aluno
          para com o mundo globalizado, temos as redes sociais.
        </p>
        <p>
          Cada usuário terá um tópico com os nomes de seus personagens onde
          poderão compartilhar fotos, vídeos e textos como se estivessem em suas
          próprias redes sociais.
        </p>
        <p>
          Para pedir a criação do tópico ou a adição de personagem, basta pedir
          em <Discord>#🙋pedidos</Discord> com o @ do seu personagem (o mesmo
          vale para mudança de @).
        </p>
        <p className="font-bold italic">Mas porque preciso informar o @?</p>
        <p>
          O @ vai ser adicionar na descrição do tópico para facilitar o
          coleguinha de te marcar (e te ajudar a lembrar também).
        </p>
        <p className="laptop:flex">
          PS: Você pode adicionar o{' '}
          <i className="ph-fill ph-check-circle text-[#00a6ff] text-5xl mx-2" />{' '}
          caso seu personagem seja famoso/conhecido, mas use com moderação!
        </p>
      </div>
    </Toggle>
  )
}
