// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    $('#chats').empty();
    // for loop to access all messages in storage
    for (var i = 0; i < Messages.storage.length; i++) {
      MessagesView.renderMessage(Messages.storage[i]);
      //console.log(Messages.storage[i]['roomname']);
      if (!Rooms.storage.includes(Messages.storage[i]['roomname'])) {
        Rooms.storage.push(Messages.storage[i]['roomname']);
      }
    }
    // call renderMessage to render each individual message

  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    if (Friends.isFriend(message.username)) {
      var newMessage = MessageView.renderFriend({
        username: message.username,
        text: message.text
      });
    } else {
      var newMessage = MessageView.render({
        username: message.username,
        text: message.text
      });
    }
    $('#chats').append(newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

  handleRefresh: function(event) {
    $('#refresh').on('click', function () {
      App.fetch();
    });
  }

};

