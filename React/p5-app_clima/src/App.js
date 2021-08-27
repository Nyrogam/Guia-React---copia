import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  // state principal

  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  // states para consultar a la api

  const [consulta, setConsulta] = useState(false);

  const [clima, setClima] = useState([]);

  //destructuring

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultaAPI = async () => {
      if (consulta) {
        const appId = "1cf7a9f9a4154aec1194adf02176dbb0";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        console.log(url);
        const api = await fetch(url);
        const frase = await api.json();
        console.log(frase);
      }
    };
    consultaAPI();
  }, [consulta, ciudad, pais]);

  return (
    <>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
