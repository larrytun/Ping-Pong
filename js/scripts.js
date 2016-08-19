// buisness
debugger;
function pingPongFun(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  if ((i % 15) === 0){
    result.push ("Ping-Pong");
  } else if ((i % 5) === 0){
    result.push ("Pong");
  } else if ((i % 3) === 0){
    result.push ("Ping");
  } else if (isNaN(userInput)){
    result.push ("Enter a whole number only please")
  } else 
    result.push(i);
}
return result
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
