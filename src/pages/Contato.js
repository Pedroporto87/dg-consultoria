import React from "react";
import { useState } from "react";
import image from "../styles/images/IMG-20220819-WA0039.jpg";
import "../styles/Contato.css";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    telefone: "",
    celular: "",
    textarea: "",
  });
  function handleChange(event) {
    setForm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="form-conteiner">
        <div className="form-img">
          <img src={image} alt="foto com aparelho de topografia"></img>
        </div>
        <div className="formulario">
          <h1 className="form-titulo">Entre em contato com a gente</h1>
          <form className="formulario-input" onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="nome" className="form-label">
                {" "}
                Nome:
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nome"
                  value={form.nome}
                  required
                  onChange={handleChange}
                />
              </label>
              <br />
              <label htmlFor="email" className="form-label">
                {" "}
                E-mail:
                <input
                  type="email"
                  className="form-input"
                  placeholder="E-mail"
                  value={form.email}
                  required
                  onChange={handleChange}
                />
              </label>
              <br />
              <label htmlFor="assunto" className="form-label">
                Assunto:
                <input
                  type="assunto"
                  className="form-input"
                  placeholder="No que podemos ajudar?"
                  value={form.assunto}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label htmlFor="telefone" className="form-label">
                Telefone:
                <input
                  type="tel"
                  id="telefone"
                  className="form-input"
                  placeholder="(00)0000-0000"
                  pattern="([0-9]{2})[0-9]{4}-[0-9]{4}"
                  value={form.telefone}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label htmlFor="celular" className="form-label">
                Celular:
                <input
                  type="tel"
                  className="form-input"
                  placeholder="(00)00000-0000"
                  pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
                  value={form.celular}
                  onChange={handleChange}
                />
              </label>
              <br />
              <div className="form-textarea">
                <label htmlFor="textarea" className="form-label">
                  Messagem:{" "}
                </label>
                <textarea
                  type="textarea"
                  className="form-textarea-box"
                  placeholder="Nos conte como podemos ajudar"
                  required
                  value={form.textarea}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="buttom-wrapper">
              <button className="form-button">Envie aqui</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
