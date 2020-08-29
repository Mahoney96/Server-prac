const express = require('express');
const controller = require('./controller');
// massive = require('massive');
const ctrl = require('./controller.js');
// console.log(shoes)

const app = express();

app.use(express.json());  //json is the lnaguage that lets browsers communicate with any server. Its going to send the info back in JSON.

const SERVER_PORT = 3993;

//
app.get('/api/shoes',ctrl.getShoes) 

app.listen(SERVER_PORT, () => console.log(`You're servers Ruunnin on ${SERVER_PORT} Aright Aright Aright`));

// app = require(express.json());

//endpoint URL, this is an endpoint. Every endpoint has two parts , the url and the handler
// URL - like the label of the itme on the menu
// handler - do the logic
//  send() - what were actually sending the the ffornt end

// we calll it the End
// BEcause our server knows hows to handle the 

// the URL we're sending in POSTMAN has a domain 
// We call it the endpoint, because it's at the END of our URL
// Our server is listening 
// based on what endpoints