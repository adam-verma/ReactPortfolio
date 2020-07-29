const router = require("express").Router();
const contactController = require("../../controllers/contactController");

router.route("/:id")
    .get(contactController.findbyId)
    // .put(contactController.saveContact)

router.route("/")
    .post(contactController.saveContact)

module.exports = router;