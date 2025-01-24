import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Botao } from '../../styles'

const BarraLateral = () => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        <Botao onClick={() => navigate('/')}>Voltar à lista de tarefas</Botao>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
