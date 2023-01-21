// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  storage: [],

  initialize: function () {

  },

  addFriend: function(friendText) {

    // get username of

    if (!Friends.storage.includes(friendText)) {
      Friends.storage.push(friendText);
      $('#friends select').append($('<option></option>').attr('friendname', friendText).text(friendText));
      alert('Friend added!');
    } else {
      alert('Friend already added!');
    }
    MessagesView.render();


    //Friends.addFriend();

    // Friends.storage.push(newFriend);
    //add dropdown for friends list
    //if friend has already been added
    // $('#chats').on('click', function() {
    //   alert('Friend already added!');
    // });
  },

  isFriend: function(friend) {

    //check if messages.storage.username is in our friends storage
    if (Friends.storage.includes(friend)) {
      return true;
    } else {
      return false;
    }

    //use css property to bold (.css("font-weight", "Bold"))


  },

  handleClick: function () {
    //create another click listener
    $('#chats').on('click', function (event) {
      friendText = $(event.target).text();
      Friends.addFriend(friendText);
    });
  }

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};