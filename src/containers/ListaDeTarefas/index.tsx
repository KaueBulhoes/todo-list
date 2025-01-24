import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <MainContainer>
      <Titulo as="p">{`${itens.length} contatos encontrados`}</Titulo>
      <ul>
        {itens.map((contato) => (
          <li key={contato.id}>
            <Tarefa
              id={contato.id}
              nome={contato.nome}
              telefone={contato.telefone}
              email={contato.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
