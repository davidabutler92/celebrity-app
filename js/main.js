$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    // console.log(name);
    const age = $("#age").val();
    const que1 = parseInt($("#question1").val());
    // console.log(que1);
  });
});