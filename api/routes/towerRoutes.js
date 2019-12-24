"use strict";
module.exports = function(app) {
  let towerList = require("../controllers/towerController");

  app
    .route("/towers")
    .get(towerList.list_all_towers)
    .post(towerList.create_a_tower);

  app
    .route("/towers/:towerId")
    .get(towerList.read_a_tower)
    .put(towerList.update_a_tower)
    .delete(towerList.delete_a_tower);
};
