import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Pokemon = () => {
  const fetchData = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const fetchedData = await axios.get(url);
    setData(fetchedData);
  };

  const [data, setData] = useState(null);

  const [error, setError] = useState(false);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError(true);
      setData(null)
      return;
    }
    fetchData(input);
    setError(false);
    setInput("");
  };

  useEffect(() => {
    fetchData("pikachu");
  }, []);

  return (
    <>
    <div style={{textAlign: "center", marginTop: "2rem"}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Escribe un pokemon"
        />
        <button type="submit">Enviar</button>
      </form>
      </div>

      <div style={{textAlign: "center", marginTop: "4rem"}}>
        {error ? <p style={{fontFamily: "cursive", color:"red", fontSize:"50px"}}>POR FAVOR GORDO HIJO DE PUTA LLENE EL CAMPO, GRACIAS</p> : null}
      {data ? (
        <Image
          src={data.data.sprites.other.dream_world.front_default}
          alt="Imagen Pokemon"
          width='500'
          height='500'
          layout='fixed'
        ></Image>
      ) : null}
      
      </div>

      

    </>
  );
};

export default Pokemon;
