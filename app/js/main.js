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

	if($('.slider-2').length) {
		$('.slider-2').slick({

			dots: true,
			infinite: true,
			speed: 500,
			cssEase: 'ease'
		});
	}

	if($('.partners').length) {
		$('.partners').slick({

			dots: false,
			infinite: true,
			speed: 500,
			cssEase: 'ease'
		});
	}

		if($('.slider-3').length) {
		$('.slider-3').slick({

			dots: true,
			infinite: true,
			speed: 500,
			cssEase: 'ease'
		});
	}



	if (window.innerWidth < 1000) {
		$('.partners').slick('unslick');
		$('.js-unwrap').unwrap();
		// var n = 0;	
		// for(var i = 0; i<= $('.js-unwrap').length; i+=6) {
		// 	$('.js-unwrap').slice(i, i+6).wrapAll("<div class='new'></div>");
		// }

		$('.partners').slick({

			dats: false,
			infinite: true,
			speed: 500,
			cssEase: 'ease'

		});
	}


	$('.price-block__top-img, .block-demo, .mh-1').matchHeight();



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



$('.up-block__link').on('click', function() {
	$('body, html').animate({
		scrollTop: 0
	}, 2000);	
})

$("img, a").on("dragstart", function(event) { event.preventDefault(); });


});