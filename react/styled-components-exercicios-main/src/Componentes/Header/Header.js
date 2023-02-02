import { HeaderContainer } from "./styled"

export function Header(){
  return(
    <HeaderContainer>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderContainer>
  );
}