import React, { useState } from "react";

const Form = ({ addNewTask }) => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <label>Taskname</label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
