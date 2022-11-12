import React from "react";
import image from "../styles/images/IMG-20220819-WA0034.jpg";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home-conteiner">
        <div className="image-conteiner">
          <img src={image} alt="mosaico de figuras ambientais"></img>
        </div>
        <div className="text-conteiner">
          <h1 className="titulo">Sobre nós</h1>
          <p className="sobre-nos-1">
            A DG Ambiental é uma empresa do ramo de Consultoria e Assessoria
            Técnica Ambiental, fundada em 2022, especializada em prestação de
            serviços ligados a todas as etapas do <b>Licenciamento Ambiental</b>{" "}
            de empreedimentos de pequeno, médio ou grande porte das mais
            diversas áreas de negócio, tendo como diferencial a expertise de
            seus sócios no ramo de atuação.
          </p>
          <p className="sobre-nos-2">
            Nosso foco é garantir a obtenção e a manutenção de licenças
            ambientais e atender condicionantes e exigências ambientais que sua
            empresa e seu negócio precisem. Atuamos na elaboração e execução de
            diversos tipos de projetos e estudos ambientais, contribuindo para a
            conformidade ambiental de nossos clientes.
          </p>
        </div>
      </section>
      <section className="home-invite">
        <h1 className="invite-h1">
          Fale com a gente e saiba como podemos ajudá-lo
        </h1>
        <button className="invite-button" onClick={() => navigate("/Contato")}>
          Quero entrar em contato
        </button>
      </section>
    </>
  );
}
