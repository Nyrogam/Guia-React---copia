import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 4px #000;
    transition: all 0.2s ease;
  }
`;

const consultarAPI = () => {
  console.log("prueba");
};

function App() {
  return (
    <Contenedor>
      <Boton onClick={consultarAPI}> Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
