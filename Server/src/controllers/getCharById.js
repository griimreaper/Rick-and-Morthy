const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res) {
    const id = req.params.id;
    axios.get(URL + id)
        .then(character => {
            if (character.data) {
                const { id, status, name, species, origin, image, gender } = character.data;
                return res.json({ id, status, name, species, origin, image, gender });
            } else {
                return res.status(404).json({ message: "Not found" });
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message });
        });
}


module.exports = getCharById;