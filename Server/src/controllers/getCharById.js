const axios = require("axios");
const process = require("dotenv").config();
const URL = process.parsed.API_URL;

async function getCharById(req, res) {
    try {
        const ids = req.params.id;
        const response = await axios.get(`${URL}/${ids}`);
        const { id, status, name, species, origin, image, gender, episode } = response.data;
        return res.json({ id, status, name, species, origin, image, gender, episode });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: "Not found" });
        }
        return res.status(500).json({ message: error.message });
    }
}

module.exports = getCharById;