const { default: axios } = require("axios");

axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon/" });

export const getApi = (name = "") => {
const res= axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").catch(err =>console.error(err));
return res

}

