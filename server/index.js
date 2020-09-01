const express = require('express');

// massive = require('massive');
const ctrl = require('./controller.js');
// console.log(shoes)

const app = express();  

app.use(express.json());  //json is the lAnaguage that lets browsers communicate with server. Its going to send the info back in JSON.

const SERVER_PORT = 3993;


app.get('/api/shoes',ctrl.getShoes) 

app.post('/api/shoes', ctrl.addShoe)







app.listen(SERVER_PORT, () => console.log(`You're servers Ruunnin on ${SERVER_PORT} Aright Aright Aright`));

// app.post('/api/shoes')  // -- What are the 2 parts to this request?
                        // 1) the URL path/address: where retreiving the request from
                        // 2) The handler: the action at the URL 

//endpoint URL, this is an endpoint. Every endpoint has two parts , the url and the handler
// URL - like the label of the item on the menu
// handler - do the logic
//  send() - what were actually sending the the fornnt end

// we calll it the End
// Because our server knows hows to handle the 

// the URL we're sending in POSTMAN has a domain 
// We call it the endpoint, because it's at the END of our URL
// Our server is listening  to 
// based on what endpoints

// two parts 1) URL  2) THe handler - Always a function and it handles the request. BEcause were listening on port 3993 were waiting to hear if any requests come in with the endpoint /api /api/shoes. IF we get the request the handler will send 
//- Chefs knos how ot make a grill cheese sanwhich
// if chef knows how to make  a sandwich but is all out of cheese then - sending the 
// if we sent a requests to the chef for something 
// .catch - I know how to make a grille dcheese sanwich but we're all out of cheese
// .sandals wouldn't work because we are trying to send a request for something we don't have (like something the chef doesn't know how to make)