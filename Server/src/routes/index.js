const getCharById = require('../controllers/getCharById');
const getChars = require('../controllers/getChars');
const getEpisodeById = require("../controllers/getEpisodeById")
const getFav = require('../controllers/getFav');
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser")
const deleteFav = require("../controllers/deleteFav")
const login = require('../controllers/login');

const { Router } = require("express")
const router = Router()

router.get("/", (req, res) => res.send('hello world'))
router.get("/character", getChars)
router.get("/character/:id", getCharById)
router.get("/episode/:id", getEpisodeById)
router.get("/login", login)
router.post("/login", postUser)
router.get("/fav/:id", getFav)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;