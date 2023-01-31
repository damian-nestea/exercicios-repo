import React from 'react';
import InfoUsuario from './InfoUsuario.jsx';
import '../styles.css';

function CardVideo(props){

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return(
    <div>
      <div onClick={reproduzVideo}>
        <InfoUsuario infoVideo = {props.infoVideo}/>
      </div>
    </div>
  );
}

export default CardVideo;