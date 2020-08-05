
// Require dependencies
const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const db = require('./models');

require("dotenv").config({
  path: path.join(__dirname, "./.env")
 });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}
// Add routes, both API and view
app.use(routes);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Connect to Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/portfolio";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, err => { if(err) { console.log(err); }}).
then(() => console.log("MONGO DATABASE CONNECTED"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
