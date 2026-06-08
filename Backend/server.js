
require("dotenv").config();   // ✅ SABSE PEHLE

const http = require('http');
const app = require('./app');

const port = process.env.PORT ;


// 🔍 debug (remove later)
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});