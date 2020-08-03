jQuery(document).ready(function($) {
    
	// Create custom scrollbar for Achievements section
	$(".scrollBox").customScrollbar({
		fixedThumbHeight:50,
		fixedThumbWidth:10,
		animationSpeed:0
	});
	
	// Show and hide the arrow for scrolling
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});