const { default: axios } = require("axios");

axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon/" });

export const getApi = (url = "https://pokeapi.co/api/v2/pokemon/") => {
const res= axios.get(url).catch(err =>console.error(err));
return res

}

