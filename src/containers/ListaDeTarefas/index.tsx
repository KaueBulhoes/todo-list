import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container, Resultado } from './styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  //Colocando { tarefas } eu estarei extraindo tarefas ro reducer, assim eu não preciso passar state.tarefas
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  //Função que irá filtrar as tarefas na tela
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        //item é um model do tipo Tarefa, irá filtrar o titulo do modelo depois irá procurar por palavras (termo) que tenham o partes do que foi digitado.
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontradas como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${`${criterio}=${valor}`}${complementacao}"`
    }

    return mensagem
  }

  //Boas práticas, ao invés de ficar invocando a função várias vezes, melhor armazena-la em uma constante
  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
