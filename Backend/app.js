const express = require('express');
const cors = require('cors');


const connectDB = require('./db/db');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

const app = express();





// ✅ middlewares (order matters)
app.use(cors());
app.use(express.json());

app.use(cookieParser());  
// ✅ routes
app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);


// ✅ DB connect
connectDB();


// ✅ test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
