import axios from 'axios';

const endpoint = 'https://pokeapi.co/api/v2/pokemon';
const axiosData = async(name: any) => {
  if (name.startsWith('Escolha')) return name = '?limit=151'
  
  const { data } = await axios.get(`${endpoint}/${name}`)
  
  return {
    data,
  };
};

export default axiosData;
