import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 10rem;
  box-shadow: 0px 0px 8px 3px #000;

  @media (max-width: 340px) {
    margin-top: 15rem;
  }
`;

const MostrarFrase = styled.h1`
  margin-bottom: 1rem;
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <MostrarFrase>{frase.quote}</MostrarFrase>
      <p> - {frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
