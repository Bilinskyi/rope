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

	$('.price-block__top-img, .block-demo, .mh-1, .mh-2').matchHeight();

	$('.box-text, .partner-box__img').matchHeight({
		byRow: false
	});

	$(".modal-catalog").fancybox({
		'hideOnContentClick': true,
		minWidth : '90%',
		padding : 0,
		closeBtn : true

	});

	$(".modal").fancybox({
		'hideOnContentClick': true,
		minWidth : 230,
		padding : 0,
		closeBtn : true

	});

	jQuery(function($){ 
		$(".mask").mask("+7(999) 999-9999");
	});

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


	$('.main-tabs__tabs-caption').on('click', 'li:not(.main-tabs__item_active)', function() {
		$(this)
		.addClass('main-tabs__item_active').siblings().removeClass('main-tabs__item_active')
		.closest('.main-tabs').find('.main-tabs__tabs-content').removeClass('main-tabs__tabs-content_active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('main-tabs__tabs-content_active').css('display', 'block').animate({opacity: '1'}, 300);

	});


	$('#valid-scr1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-scr1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});
	$('#valid-scr2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-scr2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-scr3').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-scr3')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-scr4').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-scr4')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-scr5').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-scr5')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-optprice').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-optprice')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#val-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#val-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#val-2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#val-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-call').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-call')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#valid-form').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#valid-form')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});


});




ymaps.ready(function () {
	var map = new ymaps.Map('map-canvas-1', {
		center: [55.895297, 37.441664],
		zoom: 17,
		controls: []
	});
	var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="place-box"><div class="place-box__image"><img src="img/img-1.jpg" alt="" width="467" height="237"></div><div class="wrapp"><div class="top-title top-title_color_green top-title_size_s">г. Москва</div><div class="place-box__sub">Офис</div></div><p>Россия, Химки, Энгельса<br> 7/15 оф.39</p><div class="phone-sub"><i class="icon-phone-input"></i>8 (800) 100-25-57</div></div>');
	var polygonPlacemark = new ymaps.Placemark(
		[55.894460, 37.441664], {
			hintContent: ''
		}, {
			iconLayout: polygonLayout
		}
		);
	map.geoObjects.add(polygonPlacemark);
});

ymaps.ready(function () {
	var map2 = new ymaps.Map('map-canvas-2', {
		center: [52.519469, 85.128821],
		zoom: 17,
		controls: []
	});
	var polygonLayout2 = ymaps.templateLayoutFactory.createClass('<div class="place-box"><div class="place-box__image"><img src="img/img-2.jpg" alt="" width="467" height="237"></div><div class="wrapp"><div class="top-title top-title_color_green top-title_size_s">г. Бийск</div><div class="place-box__sub">Производство</div></div><p>Алтайский край, г. Бийск, <br> ул. Социалистическая 21 А</p><div class="phone-sub"><i class="icon-phone-input"></i>8 (800) 100-25-57</div></div>');
	var polygonPlacemark2 = new ymaps.Placemark(
		[52.518588, 85.128821], {
			hintContent: ''
		}, {
			iconLayout: polygonLayout2
		}
		);
	map2.geoObjects.add(polygonPlacemark2);
});

