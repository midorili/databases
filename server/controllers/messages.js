var models = require("../models");

module.exports = {
  get: function (req, res, next) {
    //will be a problem, need to be async. await the data; do proper err handling;
    models.messages.getAll((messages) => {
      res.send(messages);
    });
  },
  post: function (req, res, next) {
    var username = req.body.username;
    var message = req.body.message;
    var roomname = req.body.roomname;

    var params = [username, message,roomname];

    models.messages.create(params, (success) => {
      res.send(success);
    });
  },
};
