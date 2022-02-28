$(document).ready(function() {

	/*animate*/
	new WOW().init();



	var rev = $('.rev_slider');
	rev.on('init', function(event, slick, currentSlide) {
		var
		cur = $(slick.$slides[slick.currentSlide]),
		next = cur.next(),
		next2 = cur.next().next(),
		prev = cur.prev(),
		prev2 = cur.prev().prev();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');  
		prev2.addClass('slick-sprev2');
		next2.addClass('slick-snext2');  
		cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
		slick.$prev = prev;
		slick.$next = next;
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		console.log('beforeChange');
		var
		cur = $(slick.$slides[nextSlide]);
		console.log(slick.$prev, slick.$next);
		slick.$prev.removeClass('slick-sprev');
		slick.$next.removeClass('slick-snext');
		slick.$prev.prev().removeClass('slick-sprev2');
		slick.$next.next().removeClass('slick-snext2');
		next = cur.next(),  
		prev = cur.prev(); 
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

	rev.slick({
		speed: 1000,
		arrows: true,
		dots: false,
		focusOnSelect: true,
		prevArrow: '<button class="arrow-billbord prev_billbord"> <i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button class="arrow-billbord next_billbord"> <i class="fal fa-long-arrow-right"></i></button>',
		infinite: true,
		centerMode: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerPadding: '0',
		swipe: true,
		customPaging: function(slider, i) {
			return '';
		},
		/*infinite: false,*/
	});
//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}


$(".sidebar-filter__more .link-page").click(function(e) {
	e.preventDefault();
		if ($(".checkboxes-wrap .checkbox_main:nth-child(n+17)").is(":hidden")) {
			$(".checkboxes-wrap .checkbox_main:nth-child(n+17)").slideDown(200);
			$(this).html("Скрыть");
		} else {
			$(".checkboxes-wrap .checkbox_main:nth-child(n+17)").slideUp(200);
			$(this).html("Смотреть все");
		}
		
	});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();

	$(".language-list a").click(function(e) {
		e.preventDefault();
		$(this).parent().addClass("active");
		$(this).parent().siblings("li").removeClass("active");
	});

	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-main").is(":hidden")) {
			$(".menu-main").slideDown(200);
		} else {
			$(".menu-main").slideUp(200);
		}
		
	});

	$(".menu-list li:not('.menu__haschild') a").click(function() {
		$(".menu-main").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});

			$(".menu-main__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".menu-list").slideToggle(200);
			});

			$(".menu .menu__haschild > a").click(function(e) {
				e.preventDefault();
				$(this).parent().toggleClass("active");
				$(this).siblings("ul").slideToggle(200);
			});
		}
	}

	//слайдер

	$('.slider-publications').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});

	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true
			}
		}
		]
	});

	$('.slider-programs').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-arrow-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});

	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});

	$('.tabs-years li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-years").find(".tab-pane-years").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.btn-main_filter').click(function(event) {
		event.preventDefault();
		$(".sidebar-filter").slideToggle(200);
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

