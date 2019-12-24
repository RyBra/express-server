const express = require("express");
const path = require("path");

let app = express();
let port = process.env.PORT || 3000;
let mongoose = require("mongoose");
let Task = require("./api/models/towerModel"); //created model loading here
let bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://user:123456789q@cluster0-o7fln.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

var routes = require("./api/routes/towerRoutes"); //importing route
routes(app); //register the route

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port);

console.log("RESTful API server started on: http://localhost:" + port);
