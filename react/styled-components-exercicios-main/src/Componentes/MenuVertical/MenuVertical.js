import { LeftMenu , ListMenu } from "./styled"

export function MenuVertical(){
  return(
    <LeftMenu>
      <ul>
        <ListMenu>Início</ListMenu>
        <ListMenu>Em alta</ListMenu>
        <ListMenu>Inscrições</ListMenu>
        <hr />
        <ListMenu>Originais</ListMenu>
        <ListMenu>Histórico</ListMenu>
      </ul>
    </LeftMenu>
  );
}