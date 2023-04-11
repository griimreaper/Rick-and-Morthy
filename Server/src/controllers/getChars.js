const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character"

function getChars(req,res) {
    axios.get(URL)
        .then((response) => {
            if(response.data) {return res.status(200).json(response.data)}
            return res.status(404).end("Error")
        })
        .catch((err) => {
            return res.status(500).end("Error al obtener personajes de la API de Rick and Morty")
            console.log(err)
        })
}

module.exports = getChars