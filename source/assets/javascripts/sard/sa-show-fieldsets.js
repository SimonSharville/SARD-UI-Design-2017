// http://stackoverflow.com/questions/13689385/making-one-of-a-number-of-fieldsets-display-depending-on-a-selected-radio-button
// http://jsfiddle.net/davidThomas/U2MKh/1/


$('#scheduled_true').show();
$('input:radio[name="type"]').click(function() {
    var id = $(this).attr('data-targets'); // or: $(this).data('targets');
    $('div [id="scheduled_true"]').hide();
    $('#' + id).show();
});



