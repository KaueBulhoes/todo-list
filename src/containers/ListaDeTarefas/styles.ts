import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
// Aqui usamos a estratégia de deixar apenas o conteúdo principal rolando, com 100% da viewport, e usamos scroll no eixo-y como estratégia para rolamento.

export const Resultado = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
