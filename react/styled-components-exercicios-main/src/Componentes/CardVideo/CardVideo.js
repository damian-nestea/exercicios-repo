import { VideoCard ,  TituloVideo } from "./styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <VideoCard onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <TituloVideo>{props.titulo}</TituloVideo>
    </VideoCard>
  );
}

export default CardVideo;
