import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";

function App() {
  // states de pregunta

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Calculador de presupuesto</h1>
        <div className="contenido-principal contenido">
          <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />

          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column"> 2 </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
