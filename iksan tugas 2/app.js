// require('dotenv').config();
const express = require('express');
const app = express();
const routes1 = require('./routers');
const routes2 = require('./routers/polisi');
const routes3 = require('./routers/dokter');
const routes4 = require('./routers/pilot');
const routes5 = require('./routers/supir');
const routes6 = require('./routers/tentara');
const routes7 = require('./routers/kariawan');
const routes8 = require('./routers/pengusaha');
const routes9 = require('./routers/nelayan');
const routes10 = require('./routers/petani');

//app.use(express.json());

app.use([routes1, routes2, routes3, routes4, routes5, routes6, routes7, routes8, routes9, routes10]);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});