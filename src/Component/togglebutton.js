import React from "react";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { data } from "../Data/servicos";
import "../styles/togglebutton.css";
const Togglebutton = ({ conteudo, dropdown, paragrafo }) => {
  const [ativar, setAtivar] = useState(false);
  return (
    <>
      <div className="toggle">
        <button
          className="toggle-button"
          onClick={() => setAtivar((prev) => !prev)}
        >
          {ativar ? <HiChevronUp /> : <HiChevronDown />}
          {ativar && (
            <div className="dropdown">
              <p>{paragrafo}</p>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default Togglebutton;
