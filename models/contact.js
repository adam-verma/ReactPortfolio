const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const contactSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    subject: String,
    message: { type: String, required: true, trim: true }
});

const Contact = mongoose.model("Contact", contactSchema); 

module.exports = Contact; 