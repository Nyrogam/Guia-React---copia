import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // State con los datos de la cotizacion

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  // Destructuring de los datos para pasarlo a otros componentes

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion={cotizacion} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
