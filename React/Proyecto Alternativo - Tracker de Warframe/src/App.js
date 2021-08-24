import React, { useState } from "react";
import Warframe from "warframe-items";

function App() {
  const [nombre, setNombre] = useState("");
  const warframes = new Warframe().filter(
    (item) =>
      item.category === "Warframes" &&
      item.productCategory === "Suits" &&
      (item.name.toLowerCase().includes(nombre) ||
        item.description.toLowerCase().includes(nombre))
  );

  console.log(warframes);
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
