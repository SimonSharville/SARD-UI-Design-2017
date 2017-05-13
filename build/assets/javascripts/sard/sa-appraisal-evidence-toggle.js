// http://codepen.io/samsurysites/pen/vbyGK

$(document).ready(function(){

  // Evidences
  
  $("#P01_Open_Evidence_1").click(function(){ // This will toggle the div by ID from an external element.
    $("#P01_Edit_Evidence_1").slideToggle(500);
  });
  $(".P01_Close_Evidence_1").click(function(){ // This will toggle or close the div from an element within the div.
    $("#P01_Edit_Evidence_1").slideToggle(500);
  });
  $("#P01_Open_Evidence_2").click(function(){ // This will toggle the div by ID from an external element.
    $("#P01_Edit_Evidence_2").slideToggle(500);
  });
  $(".P01_Close_Evidence_2").click(function(){ // This will toggle or close the div from an element within the div.
    $("#P01_Edit_Evidence_2").slideToggle(500);
  });

  $("#P02_Open_Evidence_1").click(function(){ 
    $("#P02_Edit_Evidence_1").slideToggle(500);
  });
  $(".P02_Close_Evidence_1").click(function(){ 
    $("#P02_Edit_Evidence_1").slideToggle(500);
  });

  $("#P02_Open_Evidence_2").click(function(){ 
    $("#P02_Edit_Evidence_2").slideToggle(500);
  });
  $(".P02_Close_Evidence_2").click(function(){ 
    $("#P02_Edit_Evidence_2").slideToggle(500);
  });

  // Comments

  $("#P01_Open_Comment_1").click(function(){ 
    $("#P01_Edit_Comment_1").slideToggle(500);
  });
  $(".P01_Close_Comment_1").click(function(){ 
    $("#P01_Edit_Comment_1").slideToggle(500);
  });
  $("#P01_Open_Comment_2").click(function(){ 
    $("#P01_Edit_Comment_2").slideToggle(500);
  });
  $(".P01_Close_Comment_2").click(function(){ 
    $("#P01_Edit_Comment_2").slideToggle(500);
  });

  $("#P02_Open_Comment_1").click(function(){ 
    $("#P02_Edit_Comment_1").slideToggle(500);
  });
  $(".P02_Close_Comment_1").click(function(){ 
    $("#P02_Edit_Comment_1").slideToggle(500);
  });
  $("#P02_Open_Comment_2").click(function(){ 
    $("#P02_Edit_Comment_2").slideToggle(500);
  });
  $(".P02_Close_Comment_2").click(function(){ 
    $("#P02_Edit_Comment_2").slideToggle(500);
  });

  // Private Notes

  $("#P01_Open_Note_1").click(function(){ 
    $("#P01_Edit_Note_1").slideToggle(500);
  });
  $(".P01_Close_Note_1").click(function(){ 
    $("#P01_Edit_Note_1").slideToggle(500);
  });
  $("#P01_Open_Note_2").click(function(){ 
    $("#P01_Edit_Note_2").slideToggle(500);
  });
  $(".P01_Close_Note_2").click(function(){ 
    $("#P01_Edit_Note_2").slideToggle(500);
  });

  $("#P02_Open_Note_1").click(function(){ 
    $("#P02_Edit_Note_1").slideToggle(500);
  });
  $(".P02_Close_Note_1").click(function(){ 
    $("#P02_Edit_Note_1").slideToggle(500);
  });
  $("#P02_Open_Note_2").click(function(){ 
    $("#P02_Edit_Note_2").slideToggle(500);
  });
  $(".P02_Close_Note_2").click(function(){ 
    $("#P02_Edit_Note_2").slideToggle(500);
  });

});

