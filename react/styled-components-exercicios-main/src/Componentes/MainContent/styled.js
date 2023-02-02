import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 80%;
  display: flex;
`

export const MainSection = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`
