var db = require("../db");

module.exports = {
  getAll: function () {
    db.connection.query(`SELECT * FROM users`, function (err, results) {
      if (err) {
        throw err;
      } else {
        return results;
      }
    });
  },
  create: function (username) {
    db.connection.query(
      `INSERT INTO users (ID, User) VALUES (1, 'midori');`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log("success", results);
        }
      }
    );
  },
};

//POST request for username
//GET user
//how to write query to add data to table, get all data from table, then create new entry (insert = adding), getting is (select)
