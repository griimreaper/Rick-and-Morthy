const users = require("../utils/users")

const login = function (req, res) {
    const { email, password } = req.query
    const verification = users.find((u) => u.email === email && u.password === password)
    if (verification) {
        return res.status(200).json({ access: true })
    }
    return res.status(200).json({ access: false })
}

module.exports = login