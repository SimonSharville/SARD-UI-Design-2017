// https://codepen.io/CthuKi/pen/YqZvRv

$(document).ready(function(){
         jQuery('.showAll').click(function(){
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('.'+$(this).attr('target')).show();
        });
});