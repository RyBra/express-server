let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require("mongoose");
let Task = require("./api/models/todoListModel"); //created model loading here
let bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://user:123456789q@cluster0-o7fln.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
