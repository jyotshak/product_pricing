const db = require("../models");
const product = db.product;

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.brand) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a product
  const productNew = new product({
    name: req.body.name,
    brand: req.body.brand,
    avail: req.body.avail,
    unavail: req.body.unavail,
  });

  // Save product in the database
  productNew
    .save(productNew)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  product
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  product
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found product with id " + id });
      else {
        const processed = {
          unavailableAt: [],
          availableAt: [],
          promotionAt: [],
        };
        for (const item of data.unavail) {
          processed.unavailableAt.push(item);
        }
        for (const item of data.avail) {
          processed.availableAt.push(item);
        }
        for (const item of data.avail) {
          if (item?.promotion && item.promotion !== "")
            processed.promotionAt.push(item);
        }
        res.send(processed);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving product with id=" + id });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  product
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found product with id " + id });
      else {
        data.avail.forEach((item, index) => {
          if (item._id == req.body.store) {
            data.avail[index].promotion = req.body.promotion;
          }
        });
        product
          .findByIdAndUpdate(id, data, { useFindAndModify: false })
          .then((data) => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update product with id=${id}. Maybe product was not found!`,
              });
            } else res.send({ message: "product was updated successfully." });
          })
          .catch((err) => {
        res.status(500).send({
          message: "Error updating product with id=" + id,
        });
          });
      }
    })
    .catch((err) => {
      console.log("Error in finding product");
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  product
    .findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      } else {
        res.send({
          message: "product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  product
    .deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} products were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products.",
      });
    });
};

// Find all published products
exports.findAllPromoted = (req, res) => {
  product
    .find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};
