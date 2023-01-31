import React from "react";
import CardVideo from './components/CardVideo.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import "./styles.css";

export default function App() {
  const infoVideo = [
    {
      titulo: 'Titulo 1',
      srcVideo: 'https://picsum.photos/400/400?a=1'
    },
    {
      titulo: 'Titulo 2',
      srcVideo: 'https://picsum.photos/400/400?a=2'
    },
    {
      titulo: 'Titulo 3',
      srcVideo: 'https://picsum.photos/400/400?a=3'
    },
    {
      titulo: 'Titulo 4',
      srcVideo: 'https://picsum.photos/400/400?a=4'
    },
    {
      titulo: 'Titulo 5',
      srcVideo: 'https://picsum.photos/400/400?a=5'
    },
    {
      titulo: 'Titulo 6',
      srcVideo: 'https://picsum.photos/400/400?a=6'
    },
    {
      titulo: 'Titulo 7',
      srcVideo: 'https://picsum.photos/400/400?a=7'
    },
    {
      titulo: 'Titulo 8',
      srcVideo: 'https://picsum.photos/400/400?a=8'
    } 
  ]
  return (
    <div>
      <div className="tela-inteira">
        <Header />
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo infoVideo = {infoVideo[0]}/>
            <CardVideo infoVideo = {infoVideo[1]}/>
            <CardVideo infoVideo = {infoVideo[2]}/>
            <CardVideo infoVideo = {infoVideo[3]}/>
            <CardVideo infoVideo = {infoVideo[4]}/>
            <CardVideo infoVideo = {infoVideo[5]}/>
            <CardVideo infoVideo = {infoVideo[6]}/>
            <CardVideo infoVideo = {infoVideo[7]}/>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
