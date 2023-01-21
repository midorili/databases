var db = require("../db");

module.exports = {
  getAll: function (cb) {
    db.connection.query("SELECT * FROM messages", function (err, results) {
      if (err) {
        throw err;
      } else {
        cb(results);
      }
    });
  }, // a function which produces all the messages
  create: function (params, cb) {
    db.connection.query(
      `INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?);`, params,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      }
    );
  }, // a function which can be used to insert a message into the database
};
