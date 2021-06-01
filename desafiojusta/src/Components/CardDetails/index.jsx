/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Provider/Context";

function CardDetails() {
  const history = useHistory();
  const { filterData } = useContext(Context);
  const {
    data: { sprites, name, abilities, types },
  } = filterData;

  const handleHome = () => {
    history.push("/");
  };

  return (
    <>
      <button onClick={() => handleHome()}>Voltar para a Pokebola</button>
      <div>
        <h1>{name}</h1>
        <img src={sprites["front_default"]} alt={name} />
        <p>
          Poderes do {name}:
          {abilities.map((pokemon) => (
            <h3>{pokemon.ability.name}</h3>
          ))}
        </p>
        <p>
          Tipos do {name}:
          {types.map((pokemon) => (
            <h3>{pokemon.type.name}</h3>
          ))}
        </p>
      </div>
    </>
  );
}

export default CardDetails;
