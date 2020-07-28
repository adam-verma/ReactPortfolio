const router = require("express").Router();
const contactRoutes = require("./contact");

router.route("/contact", contactRoutes);

module.exports = router;