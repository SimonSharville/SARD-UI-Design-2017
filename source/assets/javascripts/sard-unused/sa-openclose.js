// http://codepen.io/samsurysites/pen/vbyGK

$(document).ready(function(){

  // Evidences
  
  $("#open_evidence_1").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_evidence_1").slideToggle(500);
  });
  $(".close-evidence_1").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_evidence_1").slideToggle(500);
  });

  $("#open_evidence_2").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_evidence_2").slideToggle(500);
  });
  $(".close-evidence_2").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_evidence_2").slideToggle(500);
  });

  // Comments

  $("#open_comment_1").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_comment_1").slideToggle(500);
  });
  $(".close-comment_1").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_comment_1").slideToggle(500);
  });

  $("#open_comment_2").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_comment_2").slideToggle(500);
  });
  $(".close-comment_2").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_comment_2").slideToggle(500);
  });

  // Private Notes

  $("#open_note_1").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_note_1").slideToggle(500);
  });
  $(".close-note_1").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_note_1").slideToggle(500);
  });

  $("#open_note_2").click(function(){ // This will toggle the div by ID from an external element,
    $("#edit_note_2").slideToggle(500);
  });
  $(".close-note_2").click(function(){ // This will toggle or close the div from an element within the div.
    $("#edit_note_2").slideToggle(500);
  });

  // Add more here

});

