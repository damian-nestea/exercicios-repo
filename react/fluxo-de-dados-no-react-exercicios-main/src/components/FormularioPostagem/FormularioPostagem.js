import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({inputTitulo, inputImagem, inputDescricao , onChangeTitulo, onChangeImagem, onChangeDescricao, addPost}) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input onChange= {onChangeTitulo} value={inputTitulo}  id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input onChange={onChangeImagem} value={inputImagem} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input onChange={onChangeDescricao} value={inputDescricao} id="descricao" />
        </StyledLabel>
        <SendButton onClick={addPost}>Post</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
