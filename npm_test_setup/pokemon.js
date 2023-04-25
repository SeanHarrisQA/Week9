const axios = require("axios");

async function getPokemon() {
    const poke = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    return poke;
}

module.exports = {
    getPokemon
}

