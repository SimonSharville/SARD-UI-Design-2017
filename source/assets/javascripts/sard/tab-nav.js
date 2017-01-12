// This directs an external page to the correct tab panel
// http://stackoverflow.com/questions/33079451/set-active-tab-in-tab-nav-coming-from-another-link-bootstrap



$(document).ready(function(){
    if (location.hash) {
        $('a[href=' + location.hash + ']').tab('show');
    }
});















