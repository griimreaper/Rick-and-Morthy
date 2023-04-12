const process = require("dotenv").config()

const emailv = process.parsed.EMAIL
const passwordv = process.parsed.PASSWORD

const login = function (req, res) {
    const { email, password } = req.query
    if (email === emailv && password === passwordv) {
        return res.status(200).json({ access: true })
    }
    return res.status(200).json({ access: false })
}

module.exports = login