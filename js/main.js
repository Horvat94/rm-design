(function ($) {

   // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
    
                    if ($(".filter-button").removeClass("active")) {
                $(this).removeClass("active");
                }
                    $(this).addClass("active");
                });

})(jQuery);