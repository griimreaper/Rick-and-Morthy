const axios = require("axios");
const process = require("dotenv").config();
const URL = process.parsed.API_URL;

async function getCharById(req, res) {
    try {
        const ids = req.params.id;
        if(ids === "1000"){
            return res.json ({
                id:"1000",
                status:"Alive",
                name:"Leonel Behnke",
                species:"Human",
                origin:{name:"Argentina"},
                gender:"Male",
                image:"https://scontent.fepa14-1.fna.fbcdn.net/v/t1.6435-9/101702864_148789676745244_5297213200310206464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=k7TDW2TsbncAX_pVQVi&_nc_ht=scontent.fepa14-1.fna&oh=00_AfDeS4bc38RSNi9je7tLOiI3csIoQ8BH0Zt71vtoHnOe5w&oe=6443323F"
            })
        }
        const response = await axios.get(`${URL}/${ids}`);
        const { id, status, name, species, origin, image, gender, episode } = response.data;
        return res.json({ id, status, name, species, origin, image, gender, episode });
    } catch (error) {
        if (error.response && error.response.status === 500) {
            return res.status(500).json({ message: "Not found" });
        }
        return res.status(500).json({ message: error.message });
    }
}

module.exports = getCharById;