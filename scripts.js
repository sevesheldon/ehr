$( document ).ready(function() {
    

    console.log( "ready!" );

});



// $("#next-section-history a").on('click', function (){ 
// 	$('html, body').animate({scrollTop: $('#history-section').offset().top }, 750); 
// });

$("#next-section-history a").click(function() {
    $('html, body').animate({
        scrollTop: $("#history-section").offset().top
    }, 750);
});