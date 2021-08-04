import React from "react";

function App() {
  const Items = require("warframe-items");
  const listadoItem = new Items();

  console.log(listadoItem);

  console.log("Hola");

  return (
    <div>
      <h1>desde app</h1>
    </div>
  );
}

export default App;
