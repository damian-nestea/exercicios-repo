import styled from "styled-components";

export const VideoCard = styled.article`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  > img{
    width: 100%;
    height: 200px;
  }
`

export const TituloVideo = styled.h4`
  margin-top:1rem;
  text-align:center;
`