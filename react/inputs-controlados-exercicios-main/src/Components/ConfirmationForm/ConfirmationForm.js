import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  return (
    <Form>
      <input value={props.dataNascimento} onChange={props.onChangeDataNascimento} placeholder="Data de nascimento"/>
      <input value={props.telefone} onChange={props.onChangeTelefone} placeholder="Telefone"/>
      <input value={props.cidade} onChange={props.onChangeCidade} placeholder="Cidade"/>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;