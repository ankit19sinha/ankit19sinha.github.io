jQuery(document).ready(function($) {
    
	$(".project").hide();
	
	// Show first 4 projects
    $(".project").slice(0, 4).show();
    
	// Show next 4 hidden projects
	$("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".project:hidden").slice(0, 4).slideDown();
        
		// Disable the load more button if no more hidden projects
		if ($(".project:hidden").length == 0) {
            $("#loadMore").prop('disabled', true);
			$("#loadMore").css('background-color', '#DAE3E7');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
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