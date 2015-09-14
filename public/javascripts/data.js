// var myDataRef = new Firebase('https://popping-inferno-2304.firebaseio.com/');
var myData = new Firebase('https://popthis.firebaseio.com/messages');
$("#messageInput").keypress(function (e) {
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myData.push({name: name, text: text});
    $('#messageInput').val('');
  }
});
myData.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
  $('<li/>').addClass('list-group-item').text(text)
  .prepend($('<em/>').addClass('userName').text(" " + name+': ')).prepend($('<span/>').addClass('glyphicon glyphicon-console'))
  .appendTo($('.list-group'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
