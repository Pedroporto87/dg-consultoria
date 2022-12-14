import React from "react";
import TituloServicos from "../Component/tituloServicos";
import "../styles/projetos.css";

import image from "../styles/images/servicos.jpg";

export default function Projetos() {
  return (
    <div className="servicos-conteiner">
      <div className="servicos-img">
        <img src={image} alt="imagem com uma pilha de troncos cortados"></img>
      </div>
      <section className="servicos-block">
        <TituloServicos />
      </section>
    </div>
  );
}
