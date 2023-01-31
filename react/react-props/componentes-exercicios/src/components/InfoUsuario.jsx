import React from 'react';
import '../styles.css';

function InfoUsuario(props){
  return(
    <div className="box-pagina-principal">
      <img src={props.infoVideo.srcVideo} alt="" />
      <h4>{props.infoVideo.titulo}</h4>
    </div>
  );
}

export default InfoUsuario;