$(document).ready(function () {

    // navbar
    let navbar = $("#nav");
    let btn_nav = $("#btn-nav");
    navbar.hide();

    // navbar
    btn_nav.click(function () {
        navbar.toggle(150);
    });
    
    $(document).on("click", function(event) {
        if ($(event.target).is("#nav-wrapper")) {
            navbar.hide(150);
        }
    });

});