// http://stackoverflow.com/questions/31178653/how-to-keep-active-css-style-after-click-a-button

$('.rag-btn').on('click', function(){
    $('.rag-btn').removeClass('selected');
    $(this).addClass('selected');
});