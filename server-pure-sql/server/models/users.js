var db = require("../db");

module.exports = {
  getAll: function (cb) {
    db.connection.query(`SELECT * FROM users`, function (err, users) {
      if (err) {
        throw err;
      } else {
        cb(users);
      }
    });
  },
  create: function (username, cb) {
    db.connection.query(
      `INSERT INTO users (username) VALUES ("${username}");`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      }
    );
  },
};

//POST request for username
//GET user
//how to write query to add data to table, get all data from table, then create new entry (insert = adding), getting is (select)
