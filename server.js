
// Require dependencies
const express= require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const Session = require("express-session");
const flash = require("connect-flash");
const FileStore = require("session-file-store")(Session);
const path = require("path");
// const server = require("https").createServer(app);
// const io = require("socket.io").listen(server);

const db = require('./models');

require("dotenv").config({
  path: path.join(__dirname, "./.env")
 });

// io.on("connection", (socket) => {

//   console.log("A USER CONNECTED!");
  

//   socket.on("disconnect", () => {
//     console.log("A USER DISCONNECTED")
//   })

//   socket.on("join", ({}, callback) => {

//     callback({msg: "Welcome!"});
//   })


//   socket.on("sendMessage", (message, callback) =>{
//     console.log(socket.id);
//     console.log(message);
//     io.sockets.emit("sendMessage", {message: message, username: socket.id});
    
//   })

// });

app.use(Session({
  store: new FileStore({
      path : 'server/sessions'
  }),
  secret: config.server.secret,
  maxAge : Date().now + (60 * 1000 * 30),
  resave : true,
  saveUninitialized : false,
}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
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

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/foodfeed";
// Connect to Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => { if(err) { console.log(err); }}).
then(() => console.log("MONGO DATABASE CONNECTED"));

app.use(flash());
app.use(cookieParser())

// Register app routes

// app.use("/streams", Stream);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
