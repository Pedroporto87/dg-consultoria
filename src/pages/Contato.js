import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import image from "../styles/images/contato_2.png";
import "../styles/Contato.css";

export default function Contato() {
  const [buttomText, setButtomText] = useState("Enviar");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    telefone: "",
    celular: "",
    textarea: "",
  });
  const formRef = useRef();
  function handleChange(event) {
    setForm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_oqwsgjn",
        "template_hpw9gul",
        formRef.current,
        "JjOAky0ZCszrZDkig"
      )
      .then(
        (response) => {
          setButtomText("Mensagem enviada com sucesso");
        },
        (err) => {
          setButtomText("Sua mensagem não foi enviada");
        }
      );
  }

  return (
    <>
      <div className="form-conteiner">
        <div className="form-img">
          <img src={image} alt="foto com aparelho de topografia"></img>
        </div>
        <div className="formulario">
          <h1 className="form-titulo">Entre em contato com a gente</h1>
          <form
            ref={formRef}
            className="formulario-input"
            onSubmit={handleSubmit}
          >
            <div className="form">
              <label htmlFor="nome" className="form-label">
                {" "}
                Nome:
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nome"
                  name="nome"
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
                  name="email"
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
                  name="assunto"
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
                  name="telefone"
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
                  name="celular"
                  onChange={handleChange}
                />
              </label>
              <br />
              <div className="form-textarea">
                <label htmlFor="textarea" className="form-label">
                  Mensagem:{" "}
                </label>
                <textarea
                  type="textarea"
                  className="form-textarea-box"
                  placeholder="Nos conte como podemos ajudar"
                  required
                  name="textarea"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="buttom-wrapper">
              <button className="form-button" type="submit">
                {buttomText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
