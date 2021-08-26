import React from "react";
import styled from "@emotion/styled";

const Lista = styled.li`
  background-color: gray;
  padding: 1rem;
  margin: 10px;
`;

const ContenedorLista = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Test = ({ arrayTest }) => {
  console.log({ arrayTest });
  return (
    <ContenedorLista>
      {arrayTest.map((numero) => {
        return <Lista key={numero}>{numero} </Lista>;
      })}
    </ContenedorLista>
  );
};

export default Test;
