import React from "react";
import { data } from "../Data/servicos";
import Togglebutton from "./togglebutton";
const TituloServicos = (conteudo, dropdown, paragrafo) => {
  return (
    <div className="servicos-titulo">
      {data.map((data) => (
        <div key={data.id}>
          <li key={data.titulo}>
            {data.titulo}
            <ul>
              {data.conteudo.map((conteudo) => (
                <li key={conteudo.id}>
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
