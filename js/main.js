$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    // console.log(name);
    const age = $("#age").val();
    const que1 = parseInt($("#question1").val());
    // console.log(que1);
    const que2 = parseInt($("#question2").val());
    const que3 = parseInt($("#question3").val());
    const total = que1 + que2 + que3;

    if (total <= 10) {
      $("#result").text("kanye West");
    } else if (total >= 11 && total <=20) {
      $("#result").text("Alesha Keys");
    } else if (total >= 21 && total <= 20) {
      $("#result").text("Bob Marley");
    } else {
      $("#result").text("Single 4 life");
    }

    $("#name").text(name);
    $("#result").show();
  });
});