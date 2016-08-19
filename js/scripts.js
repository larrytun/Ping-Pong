// buisness
debugger;
var output = [];
var pingOrPongs =["Ping","Pong","Ping-Pong"];
for (var i = 0; i < output.length; i+=1) {
  total = output[i];
  alert(output);
}
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
  }

;


// for (var i = 0; i <= 15 ; i++){











// user
$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPongFun(userInput);
    $("ul").prepend("<li>" + result + "</li>")
  });
  });
