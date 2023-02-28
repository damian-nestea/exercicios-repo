import React from 'react'
import { FormEnderecoContainer , FormEndereco , StyledLabel , Input , ButtonCadastroEndereco} from './styled'

function TelaCadastroEndereco({mudarTela}) {
  return (
    <FormEnderecoContainer>
      <h1>CADASTRO ENDEREÇO</h1>
      <FormEndereco> 
        <StyledLabel>
          Endereço:
          <Input type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Número residência:
          <Input type={"number"} />
        </StyledLabel>
        <StyledLabel>
          Telefone:
          <Input type={"number"} />
        </StyledLabel>
        <StyledLabel>
          Complemento:
          <Input type={"text"} />
        </StyledLabel>
        <ButtonCadastroEndereco onClick={()=>mudarTela(4)}>Cadastrar endereço</ButtonCadastroEndereco>
      </FormEndereco>
    </FormEnderecoContainer>
  )
}

export default TelaCadastroEndereco