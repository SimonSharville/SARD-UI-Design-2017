

// Show/Hide Scheduled details =========
// http://stackoverflow.com/questions/13689385/making-one-of-a-number-of-fieldsets-display-depending-on-a-selected-radio-button
// http://jsfiddle.net/davidThomas/U2MKh/1/

$(document).ready(function(){
  $('#scheduled_true').show();
  $('input:radio[name="type"]').click(function() {
      var id = $(this).attr('data-targets'); // or: $(this).data('targets');
      $('div [id="scheduled_true"]').hide();
      $('#' + id).show();
  });
});


// Show/Hide Repeats =========
// http://stackoverflow.com/questions/2975521/show-hide-div-based-on-select-option-jquery
// http://jsfiddle.net/FvMYz/

$(document).ready(function(){
        $('#repeatselector').change(function(){
            $('.repeats').hide();
            $('#' + $(this).val()).show();
        });
});

