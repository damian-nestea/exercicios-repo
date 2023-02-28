import styled from 'styled-components'

export const FormEnderecoContainer = styled.section`
  min-height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:3rem;
`

export const FormEndereco = styled.form`
  display:flex;
  flex-direction:column;
  gap:2rem;
`

export const StyledLabel = styled.label`
  width:35rem;
  display:flex;
  align-items:center;
  gap:1.5rem;
`

export const Input = styled.input`
  flex-grow:1;
  padding:0.7rem;
  border-radius:0.3rem;
`

export const ButtonCadastroEndereco = styled.button`
  align-self:center;
  background-color: #ff4400;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  cursor: pointer;
`


