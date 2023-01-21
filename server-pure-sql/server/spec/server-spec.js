// /* You'll need to have MySQL running and your Node server running
//  * for these tests to pass. */

// const mysql = require('mysql2');
// const axios = require('axios');

// const API_URL = 'http://127.0.0.1:3000/classes';

// describe('Persistent Node Chat Server', () => {
//   const dbConnection = mysql.createConnection({
//     user: 'root',
//     database: 'chat',
//   });

//   beforeAll((done) => {
//     dbConnection.connect();

//     const tablename = 'messages'; // TODO: fill this out

//     /* Empty the db table before all tests so that multiple tests
//      * (or repeated runs of the tests)  will not fail when they should be passing
//      * or vice versa */
//     dbConnection.query(`truncate ${tablename}`, done);
//   }, 6500);

//   afterAll(() => {
//     dbConnection.end();
//   });

//   it('Should insert posted messages to the DB', (done) => {
//     const username = 'Valjean';
//     const message = 'In mercy\'s name, three days is all I need.';
//     const roomname = 'Hello';
//     // Create a user on the chat server database.
//     axios
//       .post(`${API_URL}/users`, { 'username': username })
//       .then(() => {
//         // Post a message to the node chat server:
//         return axios.post(`${API_URL}/messages`, {
//           'username': username,
//           'message': message,
//           'roomname': roomname,
//         });
//       })
//       .then(() => {
//         // Now if we look in the database, we should find the posted message there.

//         /* TODO: You might have to change this test to get all the data from
//          * your message table, since this is schema-dependent. */
//         const queryString = 'SELECT * FROM messages';
//         const queryArgs = [];

//         dbConnection.query(queryString, queryArgs, (err, results) => {
//           if (err) {
//             throw err;
//           }
//           // Should have one result:
//           expect(results.length).toEqual(1);

//           // TODO: If you don't have a column named text, change this test.
//           expect(results[0].message).toEqual(message);
//           done();
//         });
//       })
//       .catch((err) => {
//         throw err;
//       });
//   });

//   it('Should output all messages from the DB', (done) => {
//     // Let's insert a message into the db

//     //****NOTE TO SELVES: PROBABLY NEED TO ADD ROOM AND USER ***

//     const queryString =
//       'INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)';
//     const queryArgs = ['Valjean', 'In mercy\'s name, three days is all I need.', 'Hello'];
//     /* TODO: The exact query string and query args to use here
//      * depend on the schema you design, so I'll leave them up to you. */
//     dbConnection.query(queryString, queryArgs, (err) => {
//       if (err) {
//         throw err;
//       }

//       // Now query the Node chat server and see if it returns the message we just inserted:
//       axios
//         .get(`${API_URL}/messages`)
//         .then((response) => {
//           const messageLog = response.data;
//           expect(messageLog[0].message).toEqual(queryArgs[1]);
//           expect(messageLog[0].roomname).toEqual(queryArgs[2]);
//           done();
//         })
//         .catch((err) => {
//           throw err;
//         });
//     });
//   });

//   it('Should output all users from the DB', (done) => {
//     const queryString =
//     'INSERT INTO users (username) VALUES (?)';
//     const queryArgs = ['Midori'];
//     /* TODO: The exact query string and query args to use here
//    * depend on the schema you design, so I'll leave them up to you. */
//     dbConnection.query(queryString, queryArgs, (err) => {
//       if (err) {
//         throw err;
//       }

//       // Now query the Node chat server and see if it returns the message we just inserted:
//       axios
//         .get(`${API_URL}/users`)
//         .then((response) => {
//           const username = response.data;
//           expect(username[0].username).toEqual(queryArgs[0]);
//           done();
//         })
//         .catch((err) => {
//           throw err;
//         });
//     });
//   });
// });