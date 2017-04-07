

// Show/Hide Scheduled details =========
// Used on Job Planing
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
// Used on Job Planing
// http://stackoverflow.com/questions/2975521/show-hide-div-based-on-select-option-jquery
// http://jsfiddle.net/FvMYz/

$(document).ready(function(){
        $('#repeatselector').change(function(){
            $('.repeats').hide();
            $('#' + $(this).val()).show();
        });
});


// Require if Active ========= 
// Used on Appraisals / Personal Details
// https://css-tricks.com/exposing-form-fields-radio-button-css/
$(document).ready(function(){
      var FormStuff = {
      
      init: function() {
        this.applyConditionalRequired();
        this.bindUIActions();
      },
      
      bindUIActions: function() {
        $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
      },
      
      applyConditionalRequired: function() {
        
        $(".require-if-active").each(function() {
          var el = $(this);
          if ($(el.data("require-pair")).is(":checked")) {
            el.prop("required", true);
          } else {
            el.prop("required", false);
          }
        });
        
      }
      
    };

    FormStuff.init();
});

