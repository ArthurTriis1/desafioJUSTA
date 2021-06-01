import React, { createContext, useState } from 'react';

export const Context = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterData, setFilterData] = useState();
  const [loading, setLoading] = useState(true);

  const store = {
    pokemons, setPokemons,
    filter, setFilter,
    filterData, setFilterData,
    loading, setLoading
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