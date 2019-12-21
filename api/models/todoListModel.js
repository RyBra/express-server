"use strict";
// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://user:123456789q@cluster0-o7fln.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// });

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the task"
  },
  description: {
    type: String,
    required: "Kindly enter the description of the task"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  done: {
    type: Boolean,
    default: false
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }
    ],
    default: ["pending"]
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
