import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
// height: 100vh; -> 100% do viewport

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: bold;
  border-color: #666666;
  width: 100%;
`
