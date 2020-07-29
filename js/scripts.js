$(function() {
  $("#greeting-form").submit(function(event) {
    event.preventDefault();
    this.greeting = document.getElementById("greeting").id;
    var displacementChecked = $("input:radio[name=displacement]:checked").val();
    var initialVelocityChecked = $("input:radio[name=v0-value]:checked").val();
    var finalVelocityChecked = $("input:radio[name=vf-value]:checked").val();
    var accelerationChecked = $("input:radio[name=acceleration]:checked").val();
    var timeChecked = $("input:radio[name=time]:checked").val();

    alert("Hello. " + this.greeting.value + "displacement: " + displacementChecked +
    " initial velocity: " + initialVelocityChecked
    + " final velocity: " + finalVelocityChecked + " acceleration: " +
    accelerationChecked + " time: " + timeChecked);
  });


});
