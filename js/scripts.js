// buisness
debugger;
var result = [];
for (var i = 1; i <= userInput; i++){
  if ((i % 15) === 0){
    result.push ("Ping-Pong");
  } else if ((i % 5) === 0){
    result.push ("Pong");
  } else if ((i % 3) === 0){
    result.push ("Ping");
  } else if (isNaN(i)){
    result.push ("Enter a whole number only please")
  } else ((i % 3) !==0) || ((i % 5) !==0) || ((i % 15) !==0)
    result.push (i)

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
