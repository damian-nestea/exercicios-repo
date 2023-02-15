import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({inputNome , inputFotoPerfil , onChangeNome , onChangeFotoPerfil , login}) => {

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input onChange={onChangeNome} value={inputNome} type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input onChange={onChangeFotoPerfil} value={inputFotoPerfil} type={"text"} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
