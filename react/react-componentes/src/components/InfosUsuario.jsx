import React from 'react';
import '../App.css';
import foto from '../assets/foto.jpeg';

function InfosUsuario (){
  return(
    <div className="card-video-info-usuario">
      <img src={foto} alt=""/>
      <p>Usuario: Damián</p>
    </div>
  );
}

export default InfosUsuario;