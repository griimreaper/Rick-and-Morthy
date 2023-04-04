const http = require('http');
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.startsWith('/rickandmorty/character/')) {
        const id = parseInt(req.url.split('/').pop());
        const character = data.find(char => char.id === id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(3001, () => {
    console.log('Server running at http://localhost:3001');
});