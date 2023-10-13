
$( function() {

    $('.accordion-item').click( function(e) {
        $(this).toggleClass('unfolded');

        $(this).find('.accordion-content').slideToggle(1000, function() {
            $('.unfolded').find('.accordion-title::before').val('-');
        });
    });
});