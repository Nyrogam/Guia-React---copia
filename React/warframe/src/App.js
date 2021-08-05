import React from "react";
import Warframe from "warframe-items";

function App() {
  const itemsWf = new Warframe({ category: ["Warframes"] });
  // const nombrewf = "Atlas Prime";
  // const ash = itemsWf.filter((itemsWf) => itemsWf.name === nombrewf);
  console.log(itemsWf);
  // console.log(ash);

  return <ul>{itemsWf.map((item) => console.log("hola"))}</ul>;
}

export default App;
