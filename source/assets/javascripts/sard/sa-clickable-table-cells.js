// http://stackoverflow.com/questions/17147821/how-to-make-a-whole-row-in-a-table-clickable-as-a-link

jQuery(document).ready(function($) {
    $(".clickable_td").click(function() {
        window.location = $(this).data("href");
    });
});
