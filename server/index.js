express = require('express');
massive = require('massive');

const app = express();

const SERVR_PORT = 3993;

app.listen(SERVR_PORT, () => console.log(`You're servers Ruunnin on ${SERVR_PORT} Aright Aright Aright`));

// app = require(express.json());