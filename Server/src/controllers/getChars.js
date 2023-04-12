const axios = require("axios")

const process = require("dotenv").config();

const URL = process.parsed.API_URL

async function getChars(req, res) {
    const promises = [];
    for (let i = 32; i < 42; i++) {
        promises.push(axios.get(`${URL}?page=${i}`));
    }
    try {
        const responses = await Promise.all(promises);
        const allCharacters = responses.flatMap((response) => response.data.results);
        return res.status(200).json(allCharacters);
    } catch (error) {
        console.error(error);
        return res.status(500).end("Error al obtener personajes de la API de Rick and Morty");
    }
}

module.exports = getChars