"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TowerSchema = new Schema({
  title: {
    type: String,
    required: "Название башни не указано"
  },
  value: {
    type: Number,
    required: "Масса карналита не указана"
  },
  minValue: {
    type: Number,
    default: 0
  },
  maxValue: {
    type: Number,
    required: "максимальная масса карналита не указана"
  }
});

module.exports = mongoose.model("Towers", TowerSchema);
