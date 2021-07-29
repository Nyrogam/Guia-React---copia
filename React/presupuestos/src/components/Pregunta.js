import React, { useState } from "react";

const Pregunta = () => {
  //definir la cantidad

  const [cantidad, setCantidad] = useState(0);

  // state de error

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // validacion exitosa
    setError(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
