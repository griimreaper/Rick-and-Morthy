const server = require("./src/app")
const { conn, DP_PORT } = require("./src/DB_connection")
const PORT = DP_PORT ?? 3001;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log("server raised in port: " + PORT);
    });
});