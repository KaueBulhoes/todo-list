import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, BotaoVoltar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [erros, setErros] = useState<string[]>([])

  const validarFormulario = () => {
    const novosErros: string[] = []

    if (!nome.trim()) {
      novosErros.push('O nome é obrigatório.')
    }
    if (!email.trim()) {
      novosErros.push('O e-mail é obrigatório.')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.push('O e-mail informado não é válido.')
    }
    if (!telefone.trim()) {
      novosErros.push('O telefone é obrigatório.')
    } else if (!/^\d+$/.test(telefone)) {
      novosErros.push('O telefone deve conter apenas números.')
    } else if (telefone.length < 10) {
      novosErros.push('O telefone deve ter pelo menos 10 dígitos.')
    }

    setErros(novosErros)
    return novosErros.length === 0
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (validarFormulario()) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone: Number(telefone)
        })
      )
      navigate('/')
    }
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone"
        />
        {erros.length > 0 && (
          <ul>
            {erros.map((erro, index) => (
              <li key={index} style={{ color: 'red' }}>
                {erro}
              </li>
            ))}
          </ul>
        )}
        <div style={{ display: 'flex', gap: '10px' }}>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
          <BotaoVoltar type="button" onClick={() => navigate('/')}>
            Voltar para agenda
          </BotaoVoltar>
        </div>
      </Form>
    </MainContainer>
  )
}

export default Formulario
