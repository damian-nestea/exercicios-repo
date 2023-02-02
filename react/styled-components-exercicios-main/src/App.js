import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { Header } from "./Componentes/Header/Header";
import { Footer } from "./Componentes/Footer/Footer";
import { MenuVertical } from "./Componentes/MenuVertical/MenuVertical";
import { GlobalStyle } from "./GlobalStyle"; 

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStyle />
      <div className="tela-inteira">
        <Header />
        <main>
          <MenuVertical />

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
