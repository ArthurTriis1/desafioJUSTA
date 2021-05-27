import React, { createContext, useState } from 'react';

export const Context = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterData, setFilterData] = useState();
  
  const store = {
    pokemons,
    setPokemons,
    filter, 
    setFilter,
    filterData, 
    setFilterData,
  };

  return (
    <Context.Provider value={ store }>
      {
        children
      }
    </Context.Provider>
  );
};

export default DataProvider;