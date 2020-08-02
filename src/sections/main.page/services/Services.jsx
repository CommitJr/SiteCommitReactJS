import React from "react";
import ServiceCardList from "./components/ServiceCardList";
import ServiceTitle from "./components/ServiceTitle"

function Services() {
    return (
        <>
            <ServiceTitle> {sectionTitle} </ServiceTitle>
            <ServiceCardList services={services} />
        </>
    )
}
const sectionTitle = "Nossos Produtos";
const services = [
    {
        title: "Sites Institucionais",
        text:
            "Demonstre presença da sua marca na web através de um site e ganhe visiblidade de maneira eficiente",
        image: require("../../../assets/CartaServicos/Sites Institucionais.png"),
    },
    {
        title: "Sistemas Web",
        text:
            "Sistemas gerenciados remotamente, completos com banco de dados e interface web para controle",
        image: require("../../../assets/CartaServicos/Sistemas Web.png"),
    },
    {
        title: "Aplicativos Mobile",
        text:
            "Apps para os mais variados usos e tecnologias. Explore um mercado que cresce a cada dia",
        image: require("../../../assets/CartaServicos/Aplicativos Mobile.png"),
    },
    {
        title: "Jogos Eletrônicos",
        text:
            "Lorem ipsum dolor sit amet consectur adipiscing elit nam ac mi mattis viverra risus eu",
        image: require("../../../assets/CartaServicos/Jogos Eletrônicos.png"),
    },
];

export default Services;
