import React from "react";
import { data } from "../Data/servicos";
import Togglebutton from "./togglebutton";
import "../styles/tituloServicos.css";
const TituloServicos = (conteudo, dropdown, paragrafo) => {
  return (
    <div className="servicos-titulo">
      {data.map((data) => (
        <div className="block-servicos" key={data.id}>
          <li className="servicos-list" key={data.titulo}>
            {data.titulo}
            <ul>
              {data.conteudo.map((conteudo) => (
                <li className="servicos-toggle" key={conteudo.id}>
                  {conteudo.subTitulo}
                  <Togglebutton
                    id={conteudo.id}
                    paragrafo={conteudo.dropdown.paragrafo}
                  />
                </li>
              ))}
            </ul>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TituloServicos;
