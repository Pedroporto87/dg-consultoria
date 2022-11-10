import React from "react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Modal from "./Modal";
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
          {ativar ? (
            <Modal onClose={() => setAtivar(false)} paragrafo={paragrafo} />
          ) : (
            <HiChevronDown />
          )}
        </button>
      </div>
    </>
  );
};

export default Togglebutton;
