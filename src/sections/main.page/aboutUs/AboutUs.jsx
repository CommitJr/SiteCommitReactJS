import React from "react";
import AboutUsContent from "./AboutUsContent";

function AboutUs() {
  return <AboutUsContent content={content} />;
}

export default AboutUs;

const content = {
  aboutUsTitle: "Sobre Nós",
  aboutUsText:
    "A Commit Jr é uma empresa júnior do curso de Engenharia de Computação do CEFET-MG e que atua com Consultoria e Desenvolvimento de Software, contando com uma equipe apaixonada pelo que faz e preparada para atender aos projetos com qualidade e inovação. Nosso objetivo é gerar projetos que facilitem o seu dia a dia, trazendo consequências positivas enquanto disseminamos o conhecimento de gestão e empreendedorismo entre o nosso time.",
  photo: require("../../../assets/Imagens/members.jpeg"),
};
