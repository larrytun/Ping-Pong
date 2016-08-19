// buisness
debugger;
var inputs = [];
var pingOrPongs =["Ping","Pong","Ping-Pong"];
for (var i = 0; i <= inputs; i++);
  var pingPongFun = function(userInput){
  if ((userInput % 15) === 0){
    return "Ping-Pong";
  } else if ((userInput % 5) === 0){
    return "Pong";
  } else if ((userInput % 3) === 0){
    return "Ping";
  } else if (isNaN(userInput)){
    return "Enter a whole number only please"
  } else ((userInput % 3) !==0) || ((userInput % 5) !==0) || ((userInput % 15) !==0)
    return userInput

};














// user
$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPongFun(userInput);
    result.forEach(function(output) {
    $("#output").append("<li>" + output + "</li>")
  });
});
});
