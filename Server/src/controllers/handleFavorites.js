let myFavorites = [];

const getFav = (req, res) =>{
    return res.status(200).json(myFavorites)
}

const postFav = (req, res) => {
    const { id, status, name, species, origin, image, gender } = req.body
    const character = { id, status, name, species, origin, image, gender }
    if (!myFavorites.some((fav) => fav.id === character.id)) {
        myFavorites.push(character)
    }
    return res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const id = Number(req.params.id);
    const deleteado = myFavorites.filter((ch) => ch.id !== id)
    myFavorites = deleteado
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
    getFav
}

