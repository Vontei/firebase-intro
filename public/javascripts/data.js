// var myDataRef = new Firebase('https://popping-inferno-2304.firebaseio.com/');
var myData = new Firebase('https://popthis.firebaseio.com/messages');
    $('#messageInput').keypress(function (e) {
      if (event.keyCode == 13) {
        alert('hello')
        console.log(name)
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myData.push({name: name, text: text});
        $('#messageInput').val('');
      }
    });
    myData.on('child_added', function(snapshot) {
      var message = snapshot.val();
      var name = snapshot.key()
      displayChatMessage(name, message);
    });
    function displayChatMessage(name, text) {
      $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
      $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };
