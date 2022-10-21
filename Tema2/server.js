require('dotenv').config()

const express = require('express');
const app = express();

//db connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,
 { useNewUrlParser: true });


//connecting to db
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Database connection established!"));


app.use(express.json());

//articles routes
const articlesRoute = require('./routes/articles');
app.use('/articles', articlesRoute);

//tokens routes
const tokensRoute = require('./routes/tokens');
app.use('/tokens', tokensRoute);

//categories routes
const categoriesRoute = require('./routes/categories');
app.use('/categories', categoriesRoute);

//tema 3 routes
const tema3Route = require('./routes/tema3Routes');
app.use('/tema3',tema3Route );

//sv listening
app.listen(process.env.SV_PORT, () =>
     console.log('Server is running on port ' + process.env.SV_PORT + " ..."));

