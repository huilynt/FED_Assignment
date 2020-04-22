jQuery(document).ready(function () {
    
    var navOffset, scrollPos = 0;

    jQuery(".navcon").wrap('<div class="nav-placeholder"></div>');
    
    function stickyUtility() {
        
        if (!jQuery(".navcon").hasClass("fixed")) {
            navOffset = jQuery(".navcon").offset().top;
        }
        
        jQuery(".nav-placeholder").height(jQuery(".navcon").outerHeight());

    } 
    
    stickyUtility();
    
    jQuery(window).resize(function () {
        stickyUtility();
    });
    
    jQuery(window).scroll(function () {

        scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery(".navcon").addClass("fixed");
        } else {
            jQuery(".navcon").removeClass("fixed");
        }

    });

});