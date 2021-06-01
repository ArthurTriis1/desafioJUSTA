import axios from 'axios';

const endpoint = 'https://pokeapi.co/api/v2/pokemon';
const axiosData = async(name: any) => {
  const { data } = await axios.get(`${endpoint}/${name}`)
  return {
    data,
  };
};

export default axiosData;
