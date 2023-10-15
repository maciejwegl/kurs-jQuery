$( function() {
    $('.hamburger').click( function() {
        $('.main-menu').toggleClass('main-menu-unfolded');
    });

    $('.main-menu-item a').click( function(e) {
        e.preventDefault();
        $('body').fadeOut(2000, function() {
           window.location.href = $(e.target).attr('href'); 
        });
         
    });
});