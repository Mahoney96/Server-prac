const shoes = require("../shoes-db.json")  
let id = shoes[shoes.length-1].id+1;

module.exports = {
    getShoes: (req, res) => {
        console.log(shoes)
        res.status(200).send(shoes)
        
    },
    addShoe: (req, res) =>  {
        const{name, img, inventory, description, price} = req.body
        const newShoe = {
            id, name, img, inventory, description, price
        }
        id++
        shoes.push(newShoe)
        res.status(200).send(shoes)
        },
    addShoeAgain: (req, res) => {},

    getOneShoe: (req, res) => {},

    getSavedShoes: (req, res) => {},

};

//  (addShoe) Step-Breakdown:

// 1) Declare the new function and its params: addShoe: (req, res)
// 2) invoke function using arrow function:  =>  // Note: cannot be used as constructors.
// 3) Make object for variable func: write the function/functions were using to make the changes wanted:


// 1) How are we altering the Data
// 2) Where is the data we're handling (the data we're about to do something with)
// 3) What is the function(s) we're using to make those changes to the data

            // // Ex. - functionality that addShoe is adding with the post request:

                // {const{name, img, inventory, description, price} = req.body
                // const newShoe = {
                //     id, name, img, inventory, description, price
                // }
                // id++
                // shoes.push(newShoe)
                // res.status(200).send(shoes)
                // },

            // NOTE:    How the above object function is written in the controller file for this object function:
                        // app.post('/api/shoes', ctrl.addShoe) 

            //WHY:      Do I need reference in both conroller file and index file?  
                                    // **YES** :  

            //IN SERVER/INDEX.js File:
                                //  app.get('api/shoes', ctrl/getShoes)
                                        // THE ABOVE IS REFERENCING:
                                        // 1) To the index URL 1st then comma, 
                                        // 2) The ctrl(controller) function in controller.js
                                        // 3) server/index.js acts as a reference to the actual function objects that are in the controller or controller(s) files. 







