// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    $('#rooms select').on('click', function() {
      RoomsView.render();
    });
    RoomsView.handleChange();
    RoomsView.handleClick();

  },

  render: function() {
    // TODO: Render out the list of rooms.
    $('#rooms select').empty();
    for (var i = 0; i < Rooms.storage.length; i++) {
      RoomsView.renderRoom(Rooms.storage[i]);
    }
    $('#rooms select').prepend($('<option></option>').attr('roomname', 'newRoom').text('New Room'));
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('#rooms select').append($('<option></option>').attr('roomname', roomname).text(roomname));
  },

  filterRoom: function(room) {
    if (room === 'New Room') {
      $('<input>', {
        id: 'newRoom',
      }).appendTo('#rooms');
    } else {
      $('#chats').empty();
      for (var i = 0; i < Messages.storage.length; i++) {
        if (Messages.storage[i].roomname === room) {
          MessagesView.renderMessage(Messages.storage[i]);
        }
      }
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    $('#rooms select').on('change', function () {
      var room = $('#rooms select').find(':selected').text();
      RoomsView.filterRoom(room);
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('#rooms button').on('click', function () {
      var roomText = document.getElementById('newRoom').value;
      Rooms.add(roomText);

      //Messages.generateNewMessage();
    });
  }

};