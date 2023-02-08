import styled from "styled-components";

export const Titulo = styled.h1`
    text-align:center;
    padding: 2.5rem;
    flex-basis:100%;
`

export const CardContainer = styled.div`
    width:100%;
    background-color:#e2e2e2;
    padding: 5rem;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const Card = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin: 16px;
  padding:2rem;
  width: 15rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
`;

export const PokemonName = styled.h2`
    border-top: 2px solid black;
    padding: 0.5rem 0;
`

export const PokemonType = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    padding: 0.5rem 0;
`
export const EvolveButton = styled.button`
    padding: 0.5rem;
    margin: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 30px -10px #000000;

`

export const ChangeButton = styled.button`
    background-color: #FFF;
    padding: 0.5rem;
    margin: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 30px -10px #000000;

`

export const Imagem = styled.img`
    width: 100%;

`