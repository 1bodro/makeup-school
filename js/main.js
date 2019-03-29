// ReloadGoToTop

$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

//preload

$(window).on('load', function () {
	$preloader = $('.preload'),
		$loader = $preloader.find('.preloader');
	$loader.fadeOut();
	$preloader.delay(100).fadeOut('slow');
})

//   слайдеры

$('.section-8_slider-student').slick({

	infinite: true,
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 1
			}
                },
		{
			breakpoint: 506,
			settings: {
				centerMode: false,
				slidesToShow: 1
			}
                }

            ]
});
$('.section-8_slider-leaver').slick({
	infinite: true,
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 1
			}
                },
		{
			breakpoint: 506,
			settings: {
				centerMode: false,
				slidesToShow: 1
			}
                }

            ]
});
$('.section-9_slider-work').slick({

	infinite: true,
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 1
			}
                },
		{
			breakpoint: 506,
			settings: {
				centerMode: false,
				slidesToShow: 1
			}
                }

            ]

});
$('.section-11_slider-video').slick({

	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 1
		}

            }]

});

//        меню вопросы
$(document).ready(function () {
	$('.faq-name').next().hide();
	$('.faq-name').click(function () {
		$(this).next().slideToggle();
		$('.faq-name').not(this).next().stop(true, true).slideUp();
	});

})


// основное меню       
$(document).ready(function () {
	$(document).on('click', '.header_button', function () {
		$('.header_menu').removeClass('header_menu-close');
		$('.header_menu').addClass('header_menu-active');
		$('.header_menu').fadeIn('slow');
		$(document).on('click', '.close-modal', function () {
			$('.header_menu').removeClass('header_menu-active');
			$('.header_menu').addClass('header_menu-close');
			$('.header_menu').fadeOut('slow');
		});
		$(window).scroll(function () {
			if ($(window).scrollTop() > 50) {
				$('.header_menu').removeClass('header_menu-active');
				$('.header_menu').addClass('header_menu-close');
				$('.header_menu').fadeOut('slow');

			}
		});
	});

})
$(document).ready(function () {
	heightw = $('.header_menu').height();
	console.log(heightw);
	if ($(window).width() < 640 || $(window).height() < 640) {
		heightw = $('.header_menu').height();
		console.log(heightw);
		$('.menu-list_name').next().hide();
		$('.menu-list_name').click(function () {
			$(this).next().slideToggle();
			$('.menu-list_name').not(this).next().stop(true, true).slideUp();
		});
		$('.menu-list_check').css({
			display: 'block'
		});
		$('.menu-list_name').css({
			marginBottom: '.4em'
		});
		$('.menu-list_point').children().css({
			marginBottom: '.5em',
			fontSize: '1.2em'
		});
	}

	window.addEventListener('resize', function () {
		$('.header_menu').removeClass('header_menu-active');
		$('.header_menu').addClass('header_menu-close');
		$('.header_menu').fadeOut('slow');
	});

})
// блок курсы мобильная версия
$(document).ready(function () {
	if ($(window).width() < 673 && $(window).height() < 673) {
		$('.unit-info_mobile ').next().hide();
		$('.unit-info_mobile ').click(function () {
			$(this).next().slideToggle();
			$('.unit-info_mobile ').not(this).next().stop(true, true).slideUp();
			$(this).children('.unit-info_button').toggleClass('unit-info_button-active');
			$('.unit-info_mobile ').not(this).children().removeClass('unit-info_button-active');
		});
	} else {
		$('.unit-info_description').show();
	}
})

//прокрутка к меню по кнопке

$(document).ready(function () {
	$(".form-call").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 700, 'swing');
	});
});
$(document).ready(function () {
	$(".section-1-courses").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 1500, 'swing');
	});
});

//отзывы 500 томичек   


$(document).on('click', '.comments-photo_text', function () {
	$(this).children('.text-info').addClass('text-info_on');
	$(this).children('.text-info').fadeIn('slow');
	$('.close-modal_comments').css({
		display: 'block'
	});
	var widthx = ($(window).width() - $(this).children('.text-info').children('.text-info_container').width()) / 2;
	var heightx = ($(window).height() - $(this).children('.text-info').children('.text-info_container').height()) / 2;
	window.addEventListener("orientationchange", function () {
		$('.text-info').fadeOut('slow');
		$('.close-modal_comments').fadeOut('slow');
		$('.comments-photo_text').find('.text-info').removeClass('text-info_on');
	});
	$('.close-modal_comments').css({
		right: widthx + 'px'
	});
	$('.close-modal_comments').css({
		top: heightx + 'px'
	});
	console.log(widthx);
	console.log(heightx);
});

$(document).on('click', '.close-modal_comments', function () {
	$('.text-info').fadeOut('slow');
	$('.close-modal_comments').fadeOut('slow');
	var video = $('.text-info_on').find('.comment-video').attr('src');
	$('.text-info_on').find('.comment-video').attr("src", "");
	$('.text-info_on').find('.comment-video').attr("src", video);
	$('.text-info').removeClass('text-info_on');
});

//инициализация карты яндекс
$(document).ready(function () {
	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map("map", {
			center: [56.477607, 84.950685
],
			zoom: 15,
			controls: []
		});

		var myPlacemark = new ymaps.Placemark([56.477607, 84.950685], {
			hintContent: 'Имидж-студия школа красоты Style & Visage lab',
			balloonContent: 'Имидж-студия школа красоты, Томск, проспект Ленина, 81/1',
			iconColor: '#592824'
		});

		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('scrollZoom');

		myMap.controls.add(new ymaps.control.ZoomControl({
			options: {
				position: {
					right: 10,
					top: 100
				}
			}
		}));

		myMap.controls.add('rulerControl', {
			// Отключим отображение масштабного отрезка рядом с линейкой.
			// Подробнее о настройке опций.
			scaleLine: false
		});
	}
});

//       форма с тарифами 
$(document).ready(function () {
	$("input[type='radio']").click(function () {
		$("input[type='radio']").not(this).prop('checked', false);
	});
});
