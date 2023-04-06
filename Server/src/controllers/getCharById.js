const axios = require('axios');

function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const character = {
                id: id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin.name,
                image: response.data.image,
                status: response.data.status
            };
            res.writeHead(200,{"Content-Type":'application/json'})
            res.end(JSON.stringify(character))
        })
        .catch(error => {
            res.writeHead(500,{"Content-Type":'text/plain'})
            res.end("Error al obtener personaje de la API de Rick and Morty")
        });
}

module.exports = getCharById;