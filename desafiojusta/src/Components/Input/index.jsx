/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Provider/Context";
import axiosData from "../../Services/requestAPI";

function Input() {
  const history = useHistory();
  const { pokemons, setPokemons, setFilter, setFilterData } =
    useContext(Context);
  useEffect(async () => {
    const {
      data: { results },
    } = await axiosData("?limit=151");
    setPokemons(results);
  }, []);

  const handleClick = async (pokemon) => {
    const filterSelected = await axiosData(pokemon);
    setFilterData(filterSelected);
    history.push(`/${pokemon}`);
  };

  return (
    <>
      <h1>Seja bem vindo(a), Treinador(a) Pokémon</h1>
      <select
        onChange={(event) => setFilter(event.target.value)}
        onClick={(event) => handleClick(event.target.value)}
      >
        <option disabled selected>
          Escolha seu pokemon abaixo
        </option>
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Input;
