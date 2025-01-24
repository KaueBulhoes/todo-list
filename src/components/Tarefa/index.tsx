import { useEffect, useState } from 'react'
import * as S from './styles'

import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/tarefas'
import AgendaClass from '../../models/agenda'
import { Botao, BotaoSalvar } from '../../styles'

type Props = AgendaClass

const Tarefa = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEditado, setNomeEditado] = useState(nome)
  const [emailEditado, setEmailEditado] = useState(email)
  const [telefoneEditado, setTelefoneEditado] = useState(telefone)

  useEffect(() => {
    setNomeEditado(nome)
    setEmailEditado(email)
    setTelefoneEditado(telefone)
  }, [nome, email, telefone])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeEditado(nome)
    setEmailEditado(email)
    setTelefoneEditado(telefone)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Titulo>

      {estaEditando ? (
        <>
          <input
            type="text"
            value={nomeEditado}
            onChange={(evento) => setNomeEditado(evento.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={emailEditado}
            onChange={(evento) => setEmailEditado(evento.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={telefoneEditado}
            onChange={(evento) =>
              setTelefoneEditado(Number(evento.target.value))
            }
            placeholder="Telefone"
          />
        </>
      ) : (
        <>
          <p>Nome: {nome}</p>
          <p>Email: {email}</p>
          <p>Telefone: {telefone}</p>
        </>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome: nomeEditado,
                    email: emailEditado,
                    telefone: telefoneEditado
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
