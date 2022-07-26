const { authJwt } = require("../middlewares");
const base = require("../controllers/base.controller.js");

module.exports = (app) => {
  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new product entity
  router.post("/", base.create);

  // Retrieve all base
  router.get("/", base.findAll);

  // Retrieve all published base
  router.get("/promotion", base.findAllPromoted);

  // Retrieve a single product entity with id
  router.get("/:id", base.findOne);

  // Update a product entity with id
  app.put("/api/base/:id", [authJwt.verifyToken], base.update);

  // Delete a product entity with id
  app.delete("/api/base/:id", [authJwt.verifyToken], base.delete);

  // Create a new product entity
  router.delete("/", base.deleteAll);

  app.use("/api/base", router);
};
