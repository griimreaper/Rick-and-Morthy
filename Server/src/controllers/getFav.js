const { Favorite, User } = require("../DB_connection")

const getFav = async (req, res) => {
    const { id } = req.params
    try {
        const favorites = await User.findOne({
            where: { id },
            include: [
                {
                    model: Favorite,
                }
            ]
        })
        const favoritesData = favorites.Favorites.map(fav => fav.dataValues)
        res.status(200).json(favoritesData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getFav


