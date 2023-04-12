const getCharById = require('../controllers/getCharById');
const getChars = require('../controllers/getChars');
const getEpisodeById = require("../controllers/getEpisodeById")
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites');
const login = require('../controllers/login');
const { Router } = require("express")
const router = Router()

router.get("/character", getChars)
router.get("/character/:id", getCharById)
router.get("/episode/:id", getEpisodeById)
router.get("/login", login)
router.get("/fav", getFav)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;