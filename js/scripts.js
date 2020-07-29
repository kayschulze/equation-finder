var determineAnswer = function(displacement, v0value, vfvalue, acceleration, time) {
  if (acceleration == "N/A") {
    if (displacement == "unknown") {
      $(".equation101-showing").show();
    }
    else if (v0value == "unknown") {
      $(".equation102-showing").show();
    }
    else if (vfvalue == "unknown") {
      $(".equation103-showing").show();
    }
    else if (time == "unknown") {
      $(".equation104-showing").show();
    }
  }
  else if (displacement == "N/A") {
    if (vfvalue == "unknown") {
      $(".equation201-showing").show();
    }
    else if (v0value == "unknown") {
      $(".equation202-showing").show();
    }
    else if (acceleration == "unknown") {
      $(".equation203-showing").show();
    }
    else if (time == "unknown") {
      $(".equation204-showing").show();
    }
  }
  else if (vfvalue == "N/A") {
    if (displacement == "unknown") {
      $(".equation301-showing").show();
    }
    else if (v0value == "unknown") {
      $(".equation302-showing").show();
    }
    else if (acceleration == "unknown") {
      $(".equation303-showing").show();
    }
    else if (time == "unknown") {
      $(".equation304-showing").show();
    }
  }
  else if (time == "N/A") {
    if (vfvalue == "unknown") {
      $(".equation401-showing").show();
    }
    else if (v0value == "unknown") {
      $(".equation402-showing").show();
    }
    else if (acceleration == "unknown") {
      $(".equation403-showing").show();
    }
    else if (displacement == "unknown") {
      $(".equation404-showing").show();
    }
  }
  else if (v0value == "N/A") {
    alert("Seriously?");
  }
};


var isItApplicable = function(value) {
  if (value == "N/A") {
    return 0;
  }
  else
    return 1;
};

var validateInput = function(displacement, v0, vf, acceleration, time) {
  numberOfApplicable = isItApplicable(displacement) + isItApplicable(v0)
    + isItApplicable(vf) + isItApplicable(acceleration)
      + isItApplicable(time);

  return numberOfApplicable;
};

var findEquation = function(displacement, v0, vf, acceleration, time) {
  var applicableVariables = validateInput(displacement, v0, vf, acceleration, time);
  alert("The input is: " + applicableVariables)

  if (applicableVariables >= 4) {
    determineAnswer(displacement, v0, vf, acceleration, time);
  }
}

$(function() {
  $("equation101-showing").hide();
  $("equation102-showing").hide();
  $("equation103-showing").hide();
  $("equation104-showing").hide();
  $("equation201-showing").hide();
  $("equation202-showing").hide();
  $("equation203-showing").hide();
  $("equation204-showing").hide();
  $("equation301-showing").hide();
  $("equation302-showing").hide();
  $("equation303-showing").hide();
  $("equation304-showing").hide();
  $("equation401-showing").hide();
  $("equation402-showing").hide();
  $("equation403-showing").hide();
  $("equation404-showing").hide();

  $("#variable-input-form").submit(function(event) {
    event.preventDefault();
    var displacementChecked = $("input:radio[name=displacement]:checked").val();
    var initialVelocityChecked = $("input:radio[name=v0-value]:checked").val();
    var finalVelocityChecked = $("input:radio[name=vf-value]:checked").val();
    var accelerationChecked = $("input:radio[name=acceleration]:checked").val();
    var timeChecked = $("input:radio[name=time]:checked").val();

    findEquation(displacementChecked, initialVelocityChecked,
      finalVelocityChecked, accelerationChecked, timeChecked);
  });


});
