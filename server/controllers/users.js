var models = require("../models");

module.exports = {
  get: function (req, res, next) {
    //will be a problem, need to be async. await the data; do proper err handling;
    res.json(models.users.getAll());

    console.log("Controller get");
    // res.json({ message: "DID WE GET SOMETHING?" });
  },
  post: function (req, res, next) {
    res.send(models.users.create(JSON.stringify(res.body)));
    // res.json({ message: "DID WE POST SOMETHING?" });
  },
};
