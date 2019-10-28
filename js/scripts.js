var userInput = [];

$(document).ready(function () {
  $("form#favoriteThingsForm").submit(function(event) {
    event.preventDefault();
    userInput[0] = $("#animal").val();
    userInput[1] = $("#color").val();
    userInput[2] = $("#food").val();
    userInput[3] = $("#vacation").val();
    userInput[4] = $("#game").val();
    console.log(userInput[1], userInput[0], userInput[2]);
    var newArray = [];
    newArray.push(userInput[1]);
    newArray.push(userInput[0]);
    newArray.push(userInput[2]);
    console.log(newArray);
    $("ul").append("<li>" + newArray[0] + "</li>");
    $("ul").append("<li>" + newArray[1] + "</li>");
    $("ul").append("<li>" + newArray[2] + "</li>");

  })
})
