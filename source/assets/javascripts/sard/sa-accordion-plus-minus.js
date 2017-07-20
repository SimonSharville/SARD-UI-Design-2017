// http://bootsnipp.com/snippets/3kB4m

function toggleIcon(e) {
    $(e.target)
        // .prev('.panel-heading') // this is the original setting
        .prev('')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.accordion').on('hidden.bs.collapse', toggleIcon);
$('.accordion').on('shown.bs.collapse', toggleIcon);

