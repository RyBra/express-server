"use strict";

let mongoose = require("mongoose"),
  Tower = mongoose.model("Towers");

exports.list_all_towers = function(req, res) {
  Tower.find({}, function(err, tower) {
    if (err) res.send(err);
    res.json(tower);
  });
};

exports.create_a_tower = function(req, res) {
  let new_tower = new Tower(req.body);
  new_tower.save(function(err, tower) {
    if (err) res.send(err);
    res.json(tower);
  });
};

exports.read_a_tower = function(req, res) {
  Tower.findById(req.params.towerId, function(err, tower) {
    if (err) res.send(err);
    res.json(tower);
  });
};

exports.update_a_tower = function(req, res) {
  Tower.findOneAndUpdate(
    { _id: req.params.towerId },
    req.body,
    { new: true },
    function(err, tower) {
      if (err) res.send(err);
      res.json(tower);
    }
  );
};

exports.delete_a_tower = function(req, res) {
  Task.remove(
    {
      _id: req.params.towerId
    },
    function(err, tower) {
      if (err) res.send(err);
      res.json({ message: "Tower was successfully deleted" });
    }
  );
};
