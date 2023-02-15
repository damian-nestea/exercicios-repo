import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({postTitle, postImage,postDescription}) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{postTitle}</TitleHeader>
      <Image src={postImage} />
      <Description>{postDescription}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
