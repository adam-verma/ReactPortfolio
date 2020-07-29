const db = require("../models");

// Define methods for Contact Controller
module.exports = { 
    saveContact: function(req, res) {
        db.Contact
            .create(req.body) 
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    findbyId: function(req, res) { 
        db.Contact
            .findById(req.params.id)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    }
}