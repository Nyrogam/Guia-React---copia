import React from "react";
import Test from "./components/Test";

// import styled from "@emotion/styled";

// const Lista = styled.li`
//   background-color: gray;
//   padding: 1rem;
//   margin: 10px;
// `;

// const ContenedorLista = styled.ul`
//   display: flex;
//   flex-direction: row;
// `;

const Pene = () => {
  const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    // <ContenedorLista>
    //   {arrayTest.map((numero) => {
    //     return <Lista key={numero}>{numero} </Lista>;
    //   })}
    // </ContenedorLista>
    <>
      <Test arrayTest={arrayTest} />
    </>
  );
};

export default Pene;
