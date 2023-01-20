var db = require("../db");

module.exports = {
  getAll: function () {
    db.connection.query("SELECT * FROM messages", function (err, results) {
      if (err) {
        throw err;
      } else {
        return results;
      }
    });
  }, // a function which produces all the messages
  create: function (message) {
    db.connection.query(
      `INSERT INTO messages (Message) VALUES ('hi);`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log("success", results);
        }
      }
    );
  }, // a function which can be used to insert a message into the database
};
