var models = require("../models");

module.exports = {
  get: function (req, res, next) {
    //will be a problem, need to be async. await the data; do proper err handling;
    models.users.getAll((users) => {
      res.send(users);
    });
  },
  post: function (req, res, next) {
    models.users.create(req.body.username, (success) => {
      res.send(success);
    });
  },
};
