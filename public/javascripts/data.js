// var Firebase = require('firebase')
var myDataRef = new Firebase('https://popping-inferno-2304.firebaseio.com/');
    $('#messageInput').keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.push({name: name, text: text});
        // $('#messageInput').val('');
      }
    });
    myDataRef.on('child_added', function(snapshot) {
      var message = snapshot.val();
      var name = snapshot.key()
      displayChatMessage(name, message);
    });
    function displayChatMessage(name, text) {
      $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
      $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };
