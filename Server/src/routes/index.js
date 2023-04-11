const getCharById = require('../controllers/getCharById');
const getChars = require('../controllers/getChars');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const login = require('../controllers/login');
const { Router } = require("express")
const router = Router()

router.get("/character", getChars)
router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;