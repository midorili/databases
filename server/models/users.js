var db = require("../db");

module.exports = {
  getAll: function () {
    db.query(`SELECT * FROM users`, function (err, results) {
      if (err) {
        throw err;
      } else {
        console.log(results);
      }
    });
  },
  create: function (username) {
    db.query(
      `INSERT INTO users (User) VALUES (${username});`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log(results);
        }
      }
    );
  },
};

//POST request for username
//GET user
//how to write query to add data to table, get all data from table, then create new entry (insert = adding), getting is (select)
