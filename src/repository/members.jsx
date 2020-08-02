/**
 * No futuro esse arquivo irá acessar uma api que vai retornar os dados dos membros,
 * mas por enquanto os dados serão mocados e enviados para a parte de membros.
 *
 * As imagens também devem vir de fora
 */

//*********************************************************
//import de todas as imagens
import imgLeo from "../assets/Imagens/Membros/1.jpeg";
import imgBia from "../assets/Imagens/Membros/8.jpeg";
import imgLucca from "../assets/Imagens/Membros/7.jpeg";
import imgIury from "../assets/Imagens/Membros/4.jpeg";
import imgRod from "../assets/Imagens/Membros/6.jpeg";
import imgAlex from "../assets/Imagens/Membros/5.jpeg";
import imgVitor from "../assets/Imagens/Membros/3.jpeg";
import imgDuda from "../assets/Imagens/Membros/2.jpeg";
//******************************************************************

//import React from "react"; //ate o momento não foi necessario importar o react nesse arquivo

export default function membersRepository() {
  /**
   * Toda a parte de acesso a API pelo axios
   */
  const members = getMocMembers();

  return members;
}

//function que retorna os dados mocados no formato JSON:
function getMocMembers() {
  //limitar numerro de caracter para office em 35
  const mocMembers = [
    {
      name: "Leonardo",
      office: "Vice Presidente & Devolvedor",
      photo: imgLeo,
    },
    {
      name: "Beatriz",
      office: "Presidente & Devolvedora",
      photo: imgBia,
    },
    {
      name: "Lucca",
      office: "Diretor de RH & Devolvedor",
      photo: imgLucca,
    },
    {
      name: "Iury",
      office: "Diretor de Marketing & Devolvedor",
      photo: imgIury,
    },
    {
      name: "Rodrigo",
      office: "Diretor de Projetos & Devolvedor",
      photo: imgRod,
    },
    {
      name: "Alexandre",
      office: "Gerente Administrativo & Devolvedor",
      photo: imgAlex,
    },
    {
      name: "Vitor",
      office: "Gerente de Marketing & Devolvedor",
      photo: imgVitor,
    },
    {
      name: "Eduarda",
      office: "Gerente Administrativo & Marketing",
      photo: imgDuda,
    },
  ];

  return mocMembers;
}
