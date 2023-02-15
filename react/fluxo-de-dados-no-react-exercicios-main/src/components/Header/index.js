import {TitleHeader , ImagemPerfil} from './styled'
import React from 'react'

export const Header = ({newLoginNome , newLoginImagem ,pageFlow}) => {

/*     const verificaLogin = pageFlow === 1? false:true; */
    
    return(
        <TitleHeader>
            Instagram
            <p>{newLoginNome}</p>
            <ImagemPerfil src = {newLoginImagem} alt="Imagem perfil" />
        </TitleHeader>
    )
}