// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  storage: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomName) {

    var messageObject = {
      username: App.username,
      text: '',
      roomname: roomName
    };

    Parse.create(messageObject);

    setTimeout(function() { App.fetch(); }, 5000);
    setTimeout(function() { RoomsView.render(); }, 5000);

  }

};