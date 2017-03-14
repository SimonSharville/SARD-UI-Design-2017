// This controls the Vertical Tabs used on Porfolio and Appraisal pages. 
// http://www.w3schools.com/howto/howto_js_tabs.asp
// http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs

function showContent(evt, showContent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(showContent).style.display = "block";
    evt.currentTarget.className += " active";
}