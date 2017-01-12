// This controls the Vertical Tabs used on Porfolio and Appraisal pages. 
// http://www.jqueryscript.net/other/Creating-A-Vertical-Tabs-System-with-jQuery-CSS3.html




$(function() {
  $('.tabs nav a').on('click', function() {
    show_content($(this).index());
  });
  
  

  function show_content(index) {
    // Make the content visible
    $('.tabs .content.visible').removeClass('visible');
    $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('.tabs nav a.selected').removeClass('selected');
    $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
  }
  show_content(0);
});

