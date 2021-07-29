import React from "react";

const Pregunta = () => {
  return (
    <>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
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
