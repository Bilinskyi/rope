$(window).on('load', function() {

	$('.slick-prev, .slick-next').prepend('<div class="semi-circle"></div>');

});

$(document).ready(function(){


if($('.slider-1').length) {
	$('.slider-1').slick({

		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'ease'
		// fade: true,

	});
}




 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

});