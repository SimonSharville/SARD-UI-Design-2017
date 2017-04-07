// http://codepen.io/samsurysites/pen/vbyGK

$(document).ready(function(){
  $("#open_evidence-1").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_evidence-1").slideToggle(500);
  });
  $(".close-evidence-1").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_evidence-1").slideToggle(500);
  });

  // Add more here

});

