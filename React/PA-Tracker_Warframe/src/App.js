import React, { useState } from "react";
import Warframe from "warframe-items";
import styled from "@emotion/styled";

function App() {
  const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
      rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
      cursor: pointer;
    }
  `;

  const [nombre, setNombre] = useState("");
  const warframetest = "Warframes";
  // const testwarframes = new Warframe().filter(
  //   (arma) => arma.category === "Primary"
  // );
  const warframes = new Warframe().filter(
    (item) =>
      item.category === `${warframetest}` &&
      item.productCategory === "Suits" &&
      item.name.toLowerCase().includes(nombre)
  );

  // testwarframes.map(({ name }) => {
  //   console.log({ name });
  // });

  // console.log(testwarframes);

  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <ul>
        {warframes.map(({ name, uniqueName, imageName }) => {
          return (
            <>
              <li key={uniqueName}>{name}</li>
              <Contenedor onClick={handleClick}>
                <img
                  src={`https://cdn.warframestat.us/img/${imageName}`}
                  alt={`${name}`}
                ></img>
              </Contenedor>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
