import React from "react";
import "../styles/modal.css";

const modal = ({ id = "modal", onClose = () => {}, paragrafo }) => {
  function handleOutsideClick(e) {
    if (e.target.id === id) onClose();
  }
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div id={id} className="conteiner">
        <button className="close" onClick={handleOutsideClick}>
          <div class="close-button__line close-button__line--first"></div>
          <div class="close-button__line close-button__line--second"></div>
        </button>
        <div id={id} className="content">
          {paragrafo}
        </div>
      </div>
    </div>
  );
};

export default modal;
