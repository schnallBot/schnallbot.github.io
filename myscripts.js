var hasScrolled = false;

$(document).ready(function() {
    setTimeout(function() { 
        if (!hasScrolled) {
            $("#chevron").addClass("visible");    
        }
    }, 4500);
});

$(document).on("scroll", function() {
    hasScrolled = true;
    $("#chevron").removeClass("visible");
});