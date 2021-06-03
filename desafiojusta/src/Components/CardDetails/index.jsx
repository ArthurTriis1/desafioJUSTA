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
      <div className="returnButtonContainer">
        <input type="image" onClick={() => handleHome()} alt="Retorne para a página inicial" title="Retorne à página inicial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Co71aXTyPKfI5MFN5lAFGS46g3aUotEfVw&usqp=CAU" />
      </div>
      <div className="cardDetailsContainer">
        <h1>{name}</h1>
        <img src={sprites["front_default"]} alt={name} />
        <h3>
          Poderes do {name}:
            {abilities.map((pokemon) => (
          <p>{pokemon.ability.name}</p>
        ))}
        </h3>
        <h3>
          Tipos do {name}:
            {types.map((pokemon) => (
          <p>{pokemon.type.name}</p>
        ))}
        </h3>
      </div>
      <div className="footerAsideContainer" />
    </>
  );
}

export default CardDetails;
