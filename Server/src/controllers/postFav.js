const { Favorite, User } = require("../DB_connection")

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender, userId } = req.body

    if (!id || !name || !origin || !status || !image || !species || !gender) {
        res.status(401).json({ message: "Faltan datos" })
    }

    try {
        const favorites = await Favorite.findOrCreate({ where: { name }, defaults: { id, name, origin, status, image, species, gender } });
        if(userId) {
            const user = await User.findByPk(userId);
            if(user) {
                await user.addFavorite(favorites[0]); 
                res.status(200).json({ favorites });
            } else {
                res.status(404).json({ message: `No se encontró el usuario con id ${userId}` });
            }
        } else {
            res.status(400).json({ message: "El id del usuario es requerido" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postFav