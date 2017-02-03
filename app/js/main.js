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


	if($('.slider-3').length) {
		$('.slider-3').slick({

			dots: true,
			infinite: true,
			speed: 500,
			cssEase: 'ease'
		});
	}

	

	var fl1 = true;
	var fl2 = true;

	var flsm1 = true;
	var flsm2 = true;

	$(window).on('load resize', function() {

		if (window.innerWidth < 768) {
			flsm2 = true;
			if (flsm1) {
				flsm1 = false;
				$('.section-1 .list-adv').after($('.section-1 .catalog-img'));
				
			}

		} else {

			flsm1 = true;
			if (flsm2) {
				flsm2 = false; 
				$('.header-bottom-img').before($('.section-1 .catalog-img'));
			}

		}


		if (window.innerWidth < 992) {
			fl2 = true;
			if (fl1) {
				fl1 = false;
				if ($('.partners').is('.slick-slider')) {
					$('.partners').slick('unslick');
				};

				$('.js-unwrap').unwrap();
				$('.partners').slick({

					dots: false,
					infinite: true,
					speed: 500,
					cssEase: 'ease'
				});
				$('.partners .slick-prev, .partners .slick-next').prepend('<div class="semi-circle"></div>');	

				
			}

		} else {

			fl1 = true;
			if (fl2) {
				fl2 = false; 
				if ($('.partners').is('.slick-slider')) {
					$('.partners').slick('unslick');
					var n = 0;	
					for(var i = 0; i<= $('.js-unwrap').length; i+=6) {
						$('.js-unwrap').slice(i, i+6).wrapAll("<div class='row slider-lg-item'></div>");
					}
				}

				$('.partners').slick({
					dats: false,
					infinite: true,
					speed: 500,
					cssEase: 'ease'
				});
				$('.partners .slick-prev, .partners .slick-next').prepend('<div class="semi-circle"></div>');

			}

		}





	});




	$('.price-block__top-img, .block-demo, .mh-1').matchHeight();

	$('.box-text, .partner-box__img').matchHeight({
		byRow: false
	});



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