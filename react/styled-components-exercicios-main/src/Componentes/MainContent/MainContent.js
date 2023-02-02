import { MainContainer , MainSection } from "./styled"
import CardVideo from "../CardVideo/CardVideo"
import { MenuVertical } from "../MenuVertical/MenuVertical";

export function MainContent(props){
  return(
    <MainContainer>
      <MenuVertical />

      <MainSection>
        <CardVideo
          image1={props.image1}
          titulo={props.titulo}
          textoAlternativo={props.textoAlternativo}
        />
      </MainSection>
    </MainContainer>

  );
}