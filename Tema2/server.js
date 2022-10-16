require('dotenv').config()


const express = require('express');
const app = express();

app.listen(process.env.SV_PORT, () => console.log('Server is running on port ' + process.env.SV_PORT + " ..."));