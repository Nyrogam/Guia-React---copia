import React, { useState } from "react";
import Warframe from "warframe-items";

function App() {
  const [nombre, setNombre] = useState("");
  const warframetest = "Warframes";
  const testwarframes = new Warframe().filter(
    (arma) => arma.category === "Primary"
  );
  const warframes = new Warframe().filter(
    (item) =>
      item.category === `${warframetest}` &&
      item.productCategory === "Suits" &&
      item.name.toLowerCase().includes(nombre)
  );

  testwarframes.map(({ name }) => {
    console.log({ name });
  });

  console.log(testwarframes);
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
              <img
                src={`https://cdn.warframestat.us/img/${imageName}`}
                alt="Warframe"
              ></img>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
