const http = require('http');
const getCharById = require("./controllers/getCharById")
const getChars = require("./controllers/getChars")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url.split("/")
    const param1 = url[1]
    const param2 = url[2]
    const param3 = url[3]
    if (param1 === "rickandmorty" && param2 === "character" && param3) {
        if (param3) {
            getCharById(res, param3)
        } else {
            res.statusCode = 400
            res.end('Solicitud incorrecta: falta el parámetro ID')
        }
    }else {
    getChars(res)
    }
}).listen(3001, () => {
    console.log('Servidor en ejecución en http://localhost:3001');
});