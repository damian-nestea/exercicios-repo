import styled, { createGlobalStyle } from "styled-components";
import React from 'react'
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = React.useState(1);
  const [inputNome , setInputNome] = React.useState("");
  const [inputFotoPerfil , setInputFotoPerfil] = React.useState("");
  const [inputTitulo , setInputTitulo] = React.useState("");
  const [inputImagem , setInputImagem] = React.useState("");
  const [inputDescricao , setInputDescricao] = React.useState("");

  const [newLogin , setNewLogin] = React.useState({});

  const [buttonAddPost , setButtonAddPost] = React.useState({});


  const onChangeNome = (e) => {
    setInputNome(e.target.value)
  }

  const onChangeFotoPerfil = (e) => {
    setInputFotoPerfil(e.target.value)
  }

  const onChangeTitulo = (e) => {
    setInputTitulo(e.target.value)
  }

  const onChangeImagem = (e) => {
    setInputImagem(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setInputDescricao(e.target.value)
  }

  const login = () => {
    setPageFlow(2);
    setNewLogin(
      {
        nome:inputNome,
        imagem:inputFotoPerfil
      }  
    )};

    const addPost = () =>{
      setButtonAddPost(
        {
          title:inputTitulo,
          image:inputImagem,
          descricao: inputDescricao
        }
      )
    }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header newLoginNome = {newLogin.nome} newLoginImagem = {newLogin.imagem} pageFlow = {pageFlow} />
          {pageFlow === 1 ? (
            <FormularioLogin 
              setPageFlow={setPageFlow} 
              inputNome = {inputNome}
              inputFotoPerfil = {inputFotoPerfil}
              onChangeNome = {onChangeNome}
              onChangeFotoPerfil = {onChangeFotoPerfil}
              newLogin = {newLogin}
              login = {login}
            />
          ) : (
            <FormularioPostagem 
              inputTitulo = {inputTitulo}
              inputImagem = {inputImagem}
              inputDescricao = {inputDescricao}
              onChangeTitulo = {onChangeTitulo}
              onChangeImagem = {onChangeImagem}
              onChangeDescricao = {onChangeDescricao}
              addPost = {addPost}
            />
          )}
        </aside>
        <TelaDaPostagem 
          postTitle = {buttonAddPost.title}
          postImage = {buttonAddPost.image}
          postDescription = {buttonAddPost.descricao}
        />
      </Container>
    </>
  );
}

export default App;
