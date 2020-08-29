const shoes = require("../shoes-db.json")  


module.exports = {
    getShoes: (req, res) => {
        res.status(200).send(shoes)  
    }
};