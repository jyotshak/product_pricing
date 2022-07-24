module.exports = app => {
  const base = require("../controllers/base.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", base.create);

  // Retrieve all base
  router.get("/", base.findAll);

  // Retrieve all published base
  router.get("/pubbed", base.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", base.findOne);

  // Update a Tutorial with id
  router.put("/:id", base.update);

  // Delete a Tutorial with id
  router.delete("/:id", base.delete);

  // Create a new Tutorial
  router.delete("/", base.deleteAll);

  app.use("/api/base", router);
};
