'use strict';

const $ = require('jquery');
// const gsap = require('gsap');
const TimelineMax = require('gsap').TimelineMax;
const slick = require('slick-carousel');


// ---------------------------------------------------------
$(document).ready(function () {

	// $('.slider__btn').each( function () {
	// 	$(this).on('click', function () {
	// 		$('.layout').removeClass('active-parent');
	// 		$(this).parents('.layout').addClass('active-parent');
	// 	});
	// });

	// $('.slider__play').each( function () {
	// 	$(this).on('click', function () {
	// 		$('.layout').removeClass('active-parent');
	// 		$(this).parents('.layout').addClass('active-parent');
	// 	});
	// });

	$('.slider__for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		swipe: false,
		asNavFor: '.slider__nav'
	});
	$('.slider__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider__for',
		arrows: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
			}
		},
		]
	});
/* ----- SLIDER CHANGE ------- */
	$('.slider__for').on('afterChange', function(event, slick, currentSlide){

		var $currentSlide = $("[data-slick-index='" +currentSlide+ "']");

		// console.log($currentSlide);
		$('.layout').removeClass('active-parent');

		$currentSlide.find('.layout').addClass('active-parent');
		$currentSlide.find('.slider_first').removeClass('is-active');

		// var sliderBtns = $('.slider__btn');
		// $('.slider_first').addClass('is-active');

		var detectFirstPage = $currentSlide.find('.page-one');
		var detectSecondPage = $currentSlide.find('.page-two');
		var detectThreePage = $currentSlide.find('.page-three');
		var detectFourPage = $currentSlide.find('.page-four');
		var detectFivePage = $currentSlide.find('.page-five');
		var tl = new TimelineMax();
		var ts = new TimelineMax();

	/*------ first page active ---------*/
		if(detectFirstPage.length) {
			$currentSlide.find('.picture__curtain').addClass('is-load');

			setTimeout(function () {
				$(' .picture__img').removeClass('is-active');
				$(' .picture_on').addClass('is-active');
				$('.toggler__checkbox').addClass('is-active');
			}, 3000);

			setTimeout(function () {
				$('.picture__fog').addClass('is-active');
			}, 3200);

		} else {
			$('.picture__curtain').removeClass('is-load');

			setTimeout(function () {
				$(' .picture__img').addClass('is-active');
				$(' .picture_on').removeClass('is-active');
				$('.toggler__checkbox').removeClass('is-active');
			}, 100);
			setTimeout(function () {
				$('.picture__fog').addClass('is-active');
			}, 100);

		}
	/*------ second page active ---------*/
		if(detectSecondPage.length) {
			$('.explan').removeClass('is-active');

			$('.slider__btn').removeClass('is-active');
			$('.slider_first').addClass('is-active');

			$currentSlide.find('.forn').addClass('is-loaded');
			lnMax.seek('one');
			tlStartK.play();
			tlStartCa.play();
		} else {
			$('.forn').removeClass('is-loaded');
			tlStartK.reverse().timeScale(100);
			tlStartCa.reverse().timeScale(100);

				let box = document.querySelector('.stimulant');
				let getPic = document.querySelector('.forn__pic');
				let newPic = 'static/img/content/two/formula-01.png';

				sliderBtns = document.getElementsByClassName('slider__btn');
				playBtn = document.querySelector('.slider__play');
				btn1 = document.querySelector('.slider_1');
				btn2 = document.querySelector('.slider_2');
				btn3 = document.querySelector('.slider_3');
				btn4 = document.querySelector('.slider_4');
				btn5 = document.querySelector('.slider_5');

					/*---- remove what to do in 5 -----*/
					// let box = document.querySelector('.stimulant');
					// let getPic = document.querySelector('.forn__pic');
					let oldPic = 'static/img/content/two/formula.png';

					// $('.page-two').find('[data-second]').addClass('is-hidden');

					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.remove('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.add('is-hidden');
					}

					getPic.setAttribute('src', oldPic);
					box.classList.remove('is-removed');


					/*---- remove what to do in 4  ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.add('is-hidden');
					}


					/*---- remove what to do in 3  ------*/
					tl3.reverse().timeScale(10);
					setTimeout(function () {
						for (let i = showElThree.length - 1; i >= 0; i--) {
							showElThree[i].classList.remove('is-hidden');
						}
					}, 400);

					/*---- remove what to do in 2  ------*/
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.add('is-hidden');
					}
					tl2.reverse().timeScale(8);

		}
	/*------ three page active ---------*/
		if(detectThreePage.length) {
			// sliderBtns.removeClass('is-active');
			$('.slider__btn').removeClass('is-active');
			$('.slider_first').addClass('is-active');

			lnMax2.seek('one').timeScale(8);
			showText(txt31);
		} else {
			lnMax2.seek('one').timeScale(8);

			$('.page-three').find('[data-second]').addClass('is-hidden');
			$('.page-three').find('[data-three]').addClass('is-hidden');
			tm.reverse().timeScale(8);

			// sliderBtns.removeClass('is-active');
			// btn31.classList.add('is-active');
			// showText(txt31);

		}
	/*------ four page active ---------*/
		if(detectFourPage.length  ) {

			var tl = new TimelineMax();

			var firstOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_first').find('.statistic_first');
			var firstOneHeigth = firstOne.height();
			var firstTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_first').find('.statistic_second');
			var firstTwoHeigth = firstTwo.height();

			var secondOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_second').find('.statistic_first');
			var secondOneHeigth = secondOne.height();
			var secondTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_second').find('.statistic_second');
			var secondTwoHeigth = secondTwo.height();

			var thirdOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_third').find('.statistic_first');
			var thirdOneHeigth = thirdOne.height();
			var thirdTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_third').find('.statistic_second');
			var thirdTwoHeigth = thirdTwo.height();

			tl
				.to(firstOne, .6, {y: -firstOneHeigth})
				.to(firstTwo, .6, {y: -firstTwoHeigth})
				.to(secondOne, .6, {y: -secondOneHeigth})
				.to(secondTwo, .6, {y: -secondTwoHeigth})
				.to(thirdOne, .6, {y: -thirdOneHeigth})
				.to(thirdTwo, .6, {y: -thirdTwoHeigth});
			tl.pause();


			$(window).on('scroll', function () {
				var elementTop = $('.diagramm').offset().top;
				var elementBottom = elementTop + $('.diagramm').outerHeight();
				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();
				var viewportOut = viewportTop - elementBottom;

				if(elementBottom < viewportTop && elementBottom > viewportOut){
					tl.play().timeScale(1);
				} else {
				}
			});

		} else {
			tl.reverse().timeScale(20);
			// tl.resume();
		}
	/*------ five page active ---------*/
		if(detectFivePage.length ) {
			var ts = new TimelineMax();

			var firstOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_first').find('.statistic_first');
			var firstOneHeigth = firstOne.height();
			var firstTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_first').find('.statistic_second');
			var firstTwoHeigth = firstTwo.height();

			var secondOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_second').find('.statistic_first');
			var secondOneHeigth = secondOne.height();
			var secondTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_second').find('.statistic_second');
			var secondTwoHeigth = secondTwo.height();

			var thirdOne = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_third').find('.statistic_first');
			var thirdOneHeigth = thirdOne.height();
			var thirdTwo = $('[data-slick-index="' + currentSlide + '"]').find('.iteration_third').find('.statistic_second');
			var thirdTwoHeigth = thirdTwo.height();

			ts
				.to(firstOne, .6, {y: -firstOneHeigth})
				.to(firstTwo, .6, {y: -firstTwoHeigth})
				.to(secondOne, .6, {y: -secondOneHeigth})
				.to(secondTwo, .6, {y: -secondTwoHeigth})
				.to(thirdOne, .6, {y: -thirdOneHeigth})
				.to(thirdTwo, .6, {y: -thirdTwoHeigth});
			ts.pause();

			ts.play().timeScale(1);

			$(window).on('scroll', function () {
				var elementTop = $('.diagramm').offset().top;
				var elementBottom = elementTop + $('.diagramm').outerHeight();
				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();

				if(elementBottom > viewportTop && elementTop < viewportBottom){
					ts.play().timeScale(1);
				} else {
					ts.reverse().timeScale(100);
				}
			});


		} else {
			ts.reverse().timeScale(20);
			// tl.resume();
		}
	/* ---------------------------------------------- */

	});

	var on = true;
	var off = false;
	var tl = new TimelineMax();


//  -------------------------------------------------------------
// -------- START first slider animation --------------------------------

	$('.picture__curtain').addClass('is-load');

	setTimeout(function () {
		$(' .picture__img').removeClass('is-active');
		$(' .picture_on').addClass('is-active');
		$('.toggler__checkbox').addClass('is-active');
	}, 3000);

	setTimeout(function () {
		$('.picture__fog').addClass('is-active');
	}, 3200);


	/*-----toggler__desc click -------*/
	/*---------------------*/
	$('.toggler__desc').on('click', function () {

		if ($(this).hasClass('toggler_on')) {
			$(this).parents('.toggler').find('.toggler__checkbox').addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on, .picture__fog').addClass('is-active');
		} else {
			$(this).parents('.toggler').find('.toggler__checkbox').removeClass('is-active');
			$('.picture__img, .picture__fog').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		}
	});
	/*-----toggler__btn click -------*/
	/*---------------------*/
	$('.toggler__btn').on('click', function (e) {
		e.preventDefault();
		var $toggler = $(this).parents('.toggler').find('.toggler__checkbox');

		if ($toggler.hasClass('is-active')) {
			$toggler.removeClass('is-active');
			$('.picture__img, .picture__fog').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		} else {
			$toggler.addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on, .picture__fog').addClass('is-active');
		}
	});

// --------------- end first page animation ------------------------------
// --- page four & five  --------------------
	$('.highlight').hover(
		function () {
			var light = $(this).data('highlight');
			$('.' + light).addClass('show-light');
		},
		function () {
			var light = $(this).data('highlight');
			$('.' + light).removeClass('show-light');
		});


/*-----------variables page two ----------------------------*/

	let getPage = document.querySelector('.page');
	let sliderItem = document.getElementsByClassName('slider__item');

	let sliderBtns = $('.active-parent').find('.slider__btn');

	let playBtn = $('.active-parent').find('.slider__play');
	let btn31 = document.querySelector('.slider_31');
	let btn32 = document.querySelector('.slider_32');
	let btn33 = document.querySelector('.slider_33');
	let btn1 = document.querySelector('.slider_1');
	let btn2 = document.querySelector('.slider_2');
	let btn3 = document.querySelector('.slider_3');
	let btn4 = document.querySelector('.slider_4');
	let btn5 = document.querySelector('.slider_5');

	let showElTwo = $('.active-parent').find('[data-second]');
	let showElThree = $('.active-parent').find('[data-three]');
	let showElFour = $('.active-parent').find('[data-four]');
	let showElFourEnd = $('.active-parent').find('[data-four-end]');
	let showElFourStart = $('.active-parent').find('[data-four-start]');
	let showElFive = $('.active-parent').find('[data-five]');

/*-------- page two load ----------------------*/

	/*---- anim start-------*/
		// tlStartK.play();
		// tlStartCa.play();

	/*--------btn play-----------------------*/

		playBtn = document.querySelector('.play-page-two');

		playBtn.addEventListener('click', function () {

			$('.slider__for').slick("slickSetOption", "accessibility", false);
			$('.slider__for').slick("slickSetOption", "draggable", false);
			$('.slider__for').slick("slickSetOption", "swipe", false);
			$('.slider__for').slick("slickSetOption", "touchMove", false);
			$('.slider__nav').slick("slickSetOption", "accessibility", false);
			$('.slider__nav').slick("slickSetOption", "draggable", false);
			$('.slider__nav').slick("slickSetOption", "swipe", false);
			$('.slider__nav').slick("slickSetOption", "touchMove", false);
			$('.slider__nav').css({'pointer-events' : 'none'});
			$('.slick-arrow').hide();


			let box = document.querySelector('.stimulant');
			let getPic = document.querySelector('.forn__pic');
			let newPic = 'static/img/content/two/formula-01.png';

			sliderBtns = document.getElementsByClassName('slider__btn');
			playBtn = document.querySelector('.slider__play');
			btn1 = document.querySelector('.slider_1');
			btn2 = document.querySelector('.slider_2');
			btn3 = document.querySelector('.slider_3');
			btn4 = document.querySelector('.slider_4');
			btn5 = document.querySelector('.slider_5');

			switch (getActiveBtn()) {
				case 5:
					/*---- remove what to do in 5 -----*/
					let box = document.querySelector('.stimulant');
					let getPic = document.querySelector('.forn__pic');
					let oldPic = 'static/img/content/two/formula.png';

					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.remove('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.add('is-hidden');
					}

					getPic.setAttribute('src', oldPic);
					box.classList.remove('is-removed');

				case 4:
					/*---- remove what to do in 4  ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.add('is-hidden');
					}

				case 3:
					/*---- remove what to do in 3  ------*/
					tl3.reverse().timeScale(10);
					setTimeout(function () {
						for (let i = showElThree.length - 1; i >= 0; i--) {
							showElThree[i].classList.remove('is-hidden');
						}
					}, 400);

				case 2:
					/*---- remove what to do in 2  ------*/
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.add('is-hidden');
					}
					tl2.reverse().timeScale(8);

					/*------------*/
				case 1:
					formula.removeClass('is-loaded');
					setTimeout(function () {
						tlStartK.restart();
						tlStartCa.restart();
					}, 900)

					break;
				default:
					break;
				}

				/*---- do 1-st animation----------*/
				for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
				}
				btn1.classList.add('is-active');
				lnMax.seek('one');

				/*---- do 2-d animation----------*/

				setTimeout(function () {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
							sliderBtns[i].classList.remove('is-active');
					}
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.remove('is-hidden');
					}
					lnMax.seek('two');
					btn2.classList.add('is-active');
					tl2.restart().timeScale(1);
				}, 6000);//3000

				/*---- do 3-d animation----------*/

				setTimeout(function () {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
							sliderBtns[i].classList.remove('is-active');
					}
					for (let i = showElThree.length - 1; i >= 0; i--) {
						showElThree[i].classList.add('is-hidden');
					}
					lnMax.seek('three');
					btn3.classList.add('is-active');
					tl3.restart().timeScale(1);
				}, 10000);//5000
				/*---- do 4th animation----------*/

				setTimeout(function () {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
							sliderBtns[i].classList.remove('is-active');
					}
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.remove('is-hidden');
					}
					lnMax.seek('four');
					btn4.classList.add('is-active');
					showText(txt4);
				}, 18000);//9000
				/*---- do 5th animation----------*/
				setTimeout(function () {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
							sliderBtns[i].classList.remove('is-active');
					}
					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.add('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.remove('is-hidden');
					}
					getPic.setAttribute('src', newPic);

					lnMax.seek('five');

					box.classList.add('is-removed');
					btn5.classList.add('is-active');
					showText(txt5);

					$('.slider__for').slick("slickSetOption", "accessibility", true);
					$('.slider__for').slick("slickSetOption", "draggable", true);
					$('.slider__for').slick("slickSetOption", "swipe", true);
					$('.slider__for').slick("slickSetOption", "touchMove", true);
					$('.slider__nav').slick("slickSetOption", "accessibility", true);
					$('.slider__nav').slick("slickSetOption", "draggable", true);
					$('.slider__nav').slick("slickSetOption", "swipe", true);
					$('.slider__nav').slick("slickSetOption", "touchMove", true);
					$('.slider__nav').css({'pointer-events' : 'auto'});

					$('.slick-arrow').show();

				}, 24000);//13000


			/*------ end copy from 5 step ----------------*/

			}, false);

	/*--------btn1-----------------------*/
		btn1.addEventListener('click', function () {

			/*--- detect last animation step ---------*/
			switch (getActiveBtn()) {
				case 5:
					/*---- remove what to do in 5 -----*/
					let box = document.querySelector('.stimulant');
					let getPic = document.querySelector('.forn__pic');
					let newPic = 'static/img/content/two/formula.png';

					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.remove('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.add('is-hidden');
					}

					getPic.setAttribute('src', newPic);
					box.classList.remove('is-removed');

				case 4:
					/*---- remove what to do in 4  ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.add('is-hidden');
					}

				case 3:
					/*---- remove what to do in 3  ------*/
					tl3.reverse().timeScale(10);
					setTimeout(function () {
						for (let i = showElThree.length - 1; i >= 0; i--) {
							showElThree[i].classList.remove('is-hidden');
						}
					}, 400);
					// lnMax.seek('two');

				case 2:
					/*---- remove what to do in 2  ------*/
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.add('is-hidden');
					}
					tl2.reverse().timeScale(8);

					/*------------*/
				case 1:
					formula.removeClass('is-loaded');
					// lnMax.seek('one');
						break;
				default:
					break;
			}
			/*---- do animation----------*/

			for (let i = showElTwo.length - 1; i >= 0; i--) {
				showElTwo[i].classList.add('is-hidden');
			}

			// this.classList.add('is-active');//***
			formula.removeClass('is-loaded');
			$('.slider__btn').removeClass('is-active');
			lnMax.seek('one');
			$('.slider_1').addClass('is-active');

			setTimeout(function () {
				tlStartK.restart();
				tlStartCa.restart();
			}, 1000);

			}, false);

	/*-------- btn2 ------------------------*/
		btn2.addEventListener('click', function () {
			switch (getActiveBtn()) {
				case 5:
					/*---- remove what to do in 5 -----*/
					let box = document.querySelector('.stimulant');
					let getPic = document.querySelector('.forn__pic');
					let newPic = 'static/img/content/two/formula.png';

					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.remove('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.add('is-hidden');
					}

					getPic.setAttribute('src', newPic);
					box.classList.remove('is-removed');

				case 4:
					/*---- remove what to do in 4  ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.add('is-hidden');
					}

				case 3:
					/*---- remove what to do in 3  ------*/
					tl3.reverse().timeScale(10);
					setTimeout(function () {
						for (let i = showElThree.length - 1; i >= 0; i--) {
							showElThree[i].classList.remove('is-hidden');
						}
					}, 400);
					// lnMax.seek('two');

				case 2:
					break;
					/*------------*/
				case 1:
						// notin do
					break;
				default:
					break;
			}

			for (let i = sliderBtns.length - 1; i >= 0; i--) {
					sliderBtns[i].classList.remove('is-active');
			}
			// this.classList.add('is-active'); //*****
			// for (let i = showElTwo.length - 1; i >= 0; i--) {
			// 	showElTwo[i].classList.remove('is-hidden');
			// }
			$('.slider__btn').removeClass('is-active');
			$('.slider_2').addClass('is-active');
			tl2.restart().timeScale(1);
			lnMax.seek('two');

		}, false);

	/*-------- btn3 ----------------*/
		btn3.addEventListener('click', function () {
			switch (getActiveBtn()) {
				case 5:
					/*---- remove what to do in 5 -----*/
					let box = document.querySelector('.stimulant');
					let getPic = document.querySelector('.forn__pic');
					let newPic = 'static/img/content/two/formula.png';

					for (let i = showElFourEnd.length - 1; i >= 0; i--) {
						showElFourEnd[i].classList.remove('is-hidden');
					}
					for (let i = showElFive.length - 1; i >= 0; i--) {
						showElFive[i].classList.add('is-hidden');
					}

					getPic.setAttribute('src', newPic);
					box.classList.remove('is-removed');

				case 4:
					/*---- remove what to do in 4  ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.add('is-hidden');
					}

				case 3:
					/* -- you are here -*/
				case 1:
					/*---- don`t do step  1 faster ------*/
				case 2:
					/*---- do step 2 faster ------*/
					// this.classList.add('is-active');//*****
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.remove('is-hidden');
					}

					tl2.play().timeScale(1);
					lnMax.seek('tree');
					break;
					/*------------*/
				default:
					break;
			}

			for (let i = sliderBtns.length - 1; i >= 0; i--) {
					sliderBtns[i].classList.remove('is-active');
			}
			for (let i = showElThree.length - 1; i >= 0; i--) {
				showElThree[i].classList.add('is-hidden');
			}
			// this.classList.add('is-active');//***
			tl3.restart().timeScale(1);
			$('.slider__btn').removeClass('is-active');
			$('.slider_3').addClass('is-active');
				lnMax.seek('three');
			// setTimeout(function () {
			// }, 2000);

		}, false);

	/*-------- btn4 ------------------*/
		btn4.addEventListener('click', function () {
			switch (getActiveBtn()) {
				case 5:
					/*---- remove what to do in 5 -----*/
					let box = document.querySelector('.stimulant');
					let getPic = document.querySelector('.forn__pic');
					let newPic = 'static/img/content/two/formula.png';

					// for (let i = showElFourEnd.length - 1; i >= 0; i--) {
					// 	showElFourEnd[i].classList.remove('is-hidden');
					// }
					$('[data-four-end]').removeClass('is-hidden');


					// for (let i = showElFive.length - 1; i >= 0; i--) {
					// 	showElFive[i].classList.add('is-hidden');
					// }
					$('[data-five]').addClass('is-hidden');

					getPic.setAttribute('src', newPic);
					box.classList.remove('is-removed');

					for (let i = showElFourStart.length - 1; i >= 0; i--) {
						showElFourStart[i].classList.add('is-timer');
						setTimeout(function () {
							showElFourStart[i].classList.remove('is-timer');
						}, 2000);
					}

				case 4:
					/* -- you are here -*/
				case 1:
					/*---- 1-st step always in start -----*/
				case 2:
					/*---- do step 2 faster ------*/
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.remove('is-hidden');
					}
					// this.classList.add('is-active');//****

					tl2.play().timeScale(4);
					lnMax.seek('three');
					/*------------*/
				case 3:
					/*---- do step 2 faster ------*/
					for (let i = showElThree.length - 1; i >= 0; i--) {
						showElThree[i].classList.add('is-hidden');
					}
					// this.classList.add('is-active');//****
					tl3.play().timeScale(4);
					lnMax.seek('four');
				default:
					break;
			}
			/*-restart old anim-*/
			for (let i = showElFour.length - 1; i >= 0; i--) {
				showElFour[i].classList.add('is-hidden');
			}

			/*-start new anim*/
			for (let i = sliderBtns.length - 1; i >= 0; i--) {
					sliderBtns[i].classList.remove('is-active');
			}
			for (let i = showElFour.length - 1; i >= 0; i--) {
				showElFour[i].classList.remove('is-hidden');
			}

			$('.slider__btn').removeClass('is-active');
			lnMax.seek('four');
			this.classList.add('is-active');
			showText(txt4);
		}, false);

	/*--------- btn5 -----------------*/
		btn5.addEventListener('click', function () {
			switch (getActiveBtn()) {
				case 5:
					/* -- you are here -*/
				case 1:
					/*---- 1-st step always in start -----*/
					formula.removeClass('is-loaded');
					setTimeout(function () {
						tlStartK.restart();
						tlStartCa.restart();
					}, 1000);
				case 2:
					/*---- do step 2 faster ------*/
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.remove('is-hidden');
					}
					btn2.classList.add('is-active');/*-?-*/
					tl2.play().timeScale(4);

					lnMax.seek('three');

				case 3:
					/*---- do step 3 faster ------*/
					for (let i = showElThree.length - 1; i >= 0; i--) {
						showElThree[i].classList.add('is-hidden');
					}
					btn3.classList.add('is-active');/*-?-*/
					tl3.play().timeScale(4);

					lnMax.seek('four');
				case 4:
					/*---- do step 4 faster ------*/
					for (let i = showElFour.length - 1; i >= 0; i--) {
						showElFour[i].classList.remove('is-hidden');
					}
					btn4.classList.add('is-active');/*-?-*/

					lnMax.seek('five');
				default:
					break;
			}

			let box = document.querySelector('.stimulant');
			let getPic = document.querySelector('.forn__pic');
			let oldPic = 'static/img/content/two/formula.png';
			let newPic = 'static/img/content/two/formula-01.png';
			/*-restart 4 pos */
			for (let i = showElFourEnd.length - 1; i >= 0; i--) {
				showElFourEnd[i].classList.remove('is-hidden');
			}
			for (let i = showElFive.length - 1; i >= 0; i--) {
				showElFive[i].classList.add('is-hidden');
			}
			getPic.setAttribute('src', oldPic);

			box.classList.remove('is-removed');
			/*-set new pos*/

			for (let i = sliderBtns.length - 1; i >= 0; i--) {
					sliderBtns[i].classList.remove('is-active');
			}
			for (let i = showElFourEnd.length - 1; i >= 0; i--) {
				showElFourEnd[i].classList.add('is-hidden');
			}
			for (let i = showElFive.length - 1; i >= 0; i--) {
				showElFive[i].classList.remove('is-hidden');
			}
			getPic.setAttribute('src', newPic);

			$('.slider__btn').removeClass('is-active');

			box.classList.add('is-removed');
			this.classList.add('is-active');

			lnMax.seek('five');
			showText(txt5);
			}, false);
// --------------------------------------------------------
// --- page three  --------------------

	let btnPlayThree = document.querySelector('.play-page-three');

	/*----------------------------------------------------*/
	/* - btn1 click - */
		btn31.addEventListener('click', function () {
			sliderBtns = $('.active-parent').find('.slider__btn');
			formula = $('.active-parent').find('.forn');
			delActive = $('.active-parent').find('.explan');

			let showElTwo = $('.active-parent').find('[data-second]');
			let showElThree = $('.active-parent').find('[data-three]');
			let showElFour = $('.active-parent').find('[data-four]');
			let showElFourEnd = $('.active-parent').find('[data-four-end]');
			let showElFourStart = $('.active-parent').find('[data-four-start]');
			let showElFive = $('.active-parent').find('[data-five]');

			switch (getActiveBtn()) {
				case 3:
					/*- remove 3-*/
					// for (let i = sliderBtns.length - 1; i >= 0; i--) {
					// 	sliderBtns[i].classList.remove('is-active');
					// }
					tm.reverse().timeScale(8);
				case 2:
					/*-remove 2 -*/
					// for (let i = sliderBtns.length - 1; i >= 0; i--) {
					// 	sliderBtns[i].classList.remove('is-active');
					// }
					for (let i = showElThree.length - 1; i >= 0; i--) {
						showElThree[i].classList.add('is-hidden');
					}
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.add('is-hidden');
					}
				default:
					break;
			}
			lnMax2.seek('one');
			sliderBtns.removeClass('is-active');
			btn31.classList.add('is-active');
			showText(txt31);

		}, false);

	/* -- btn2 click -- */
		btn32.addEventListener('click', function () {
			sliderBtns = $('.active-parent').find('.slider__btn');
			formula = $('.active-parent').find('.forn');
			delActive = $('.active-parent').find('.explan');

			let showElTwo = $('.active-parent').find('[data-second]');
			let showElThree = $('.active-parent').find('[data-three]');
			let showElFour = $('.active-parent').find('[data-four]');
			let showElFourEnd = $('.active-parent').find('[data-four-end]');
			let showElFourStart = $('.active-parent').find('[data-four-start]');
			let showElFive = $('.active-parent').find('[data-five]');

			switch (getActiveBtn()) {
				case 3:
					/*- remove 3-*/
					// for (let i = sliderBtns.length - 1; i >= 0; i--) {
					// 	sliderBtns[i].classList.remove('is-active');
					// }
					tm.reverse().timeScale(8);
				case 2:
				default:
				break;
			}
			for (let i = showElThree.length - 1; i >= 0; i--) {
				showElThree[i].classList.add('is-hidden');
			}
			// for (let i = sliderBtns.length - 1; i >= 0; i--) {
			// 	sliderBtns[i].classList.remove('is-active');
			// }
			for (let i = showElTwo.length - 1; i >= 0; i--) {
				showElTwo[i].classList.remove('is-hidden');
			}
			sliderBtns.removeClass('is-active');
			lnMax2.seek('two');
			btn32.classList.add('is-active');
			showText(txt32);
		}, false);

	/* -- btn3 click -- */
		btn33.addEventListener('click', function () {
			sliderBtns = $('.active-parent').find('.slider__btn');
			formula = $('.active-parent').find('.forn');
			delActive = $('.active-parent').find('.explan');

			let showElTwo = $('.active-parent').find('[data-second]');
			let showElThree = $('.active-parent').find('[data-three]');
			let showElFour = $('.active-parent').find('[data-four]');
			let showElFourEnd = $('.active-parent').find('[data-four-end]');
			let showElFourStart = $('.active-parent').find('[data-four-start]');
			let showElFive = $('.active-parent').find('[data-five]');

			switch (getActiveBtn()) {
				case 1:
					// for (let i = sliderBtns.length - 1; i >= 0; i--) {
					// 	sliderBtns[i].classList.remove('is-active');
					// }
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.remove('is-hidden');
					}
					break;
				default:
					break;
			}
			for (let i = sliderBtns.length - 1; i >= 0; i--) {
				sliderBtns[i].classList.remove('is-active');
			}
			for (let i = showElTwo.length - 1; i >= 0; i--) {
				showElTwo[i].classList.remove('is-hidden');
			}
			setTimeout(function () {
				for (let i = showElThree.length - 1; i >= 0; i--) {
					showElThree[i].classList.remove('is-hidden');
				}
			},1000);

			sliderBtns.removeClass('is-active');
			lnMax2.seek('three');
			btn33.classList.add('is-active');

			setTimeout(function () {
				tm.play().timeScale(0.6);
			}, 1700);

			showText(txt33);
		}, false);

	/* -- playBtn click -- */
		btnPlayThree.addEventListener('click', function () {
			sliderBtns = $('.active-parent').find('.slider__btn');
			formula = $('.active-parent').find('.forn');
			delActive = $('.active-parent').find('.explan');

			let showElTwo = $('.active-parent').find('[data-second]');
			let showElThree = $('.active-parent').find('[data-three]');
			let showElFour = $('.active-parent').find('[data-four]');
			let showElFourEnd = $('.active-parent').find('[data-four-end]');
			let showElFourStart = $('.active-parent').find('[data-four-start]');
			let showElFive = $('.active-parent').find('[data-five]');

			switch (getActiveBtn()) {
				case 3:
					/*- remove 3-*/
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
					}
					tm.reverse().timeScale(18);
					lnMax2.seek('two');
				case 2:
					/*-remove 2 -*/
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
					}
					for (let i = showElThree.length - 1; i >= 0; i--) {
						showElThree[i].classList.add('is-hidden');
					}
					for (let i = showElTwo.length - 1; i >= 0; i--) {
						showElTwo[i].classList.add('is-hidden');
					}
					lnMax2.seek('one');
				default:
					break;
			}
			btn31.classList.add('is-active');
			showText(txt31);
			/* go to 2 position */
			setTimeout( function () {
				btn31.classList.remove('is-active');
				lnMax2.seek('two');
				btn32.classList.add('is-active');
				for (let i = showElTwo.length - 1; i >= 0; i--) {
					showElTwo[i].classList.remove('is-hidden');
				}
				showText(txt32);
			}, 3000)
			/* go to 3 position */
			setTimeout( function () {
				btn32.classList.remove('is-active');
				lnMax2.seek('three');
				btn33.classList.add('is-active');
				for (let i = showElThree.length - 1; i >= 0; i--) {
					showElThree[i].classList.remove('is-hidden');
				}
				tm.play().timeScale(1);
				showText(txt33);
			}, 9500);

		}, false);
	// };

/*------ getActiveBtn ------------------*/
	function getActiveBtn() {
		let num = -1;
		for (var i = sliderBtns.length - 1; i >= 0; i--) {
			if (sliderBtns[i].classList.contains('is-active')) {
				num = i + 1;
			}
		}
		return num;
	}


	$(window).on('resize', function () {

		var bntHalfWidth = ($('.slider_2').width() / 2)

		btnPosition_1 = $('.slider_1').position().left;
		btnPosition_2 = $('.slider_2').position().left;
		mbtnPosition_2 = btnPosition_2 - btnPosition_1 - bntHalfWidth;
		btnPosition_3 = $('.slider_3').position().left;
		mbtnPosition_3 =  btnPosition_3 - btnPosition_2 - bntHalfWidth ;

		btnPosition_4 = $('.slider_4').position().left;
		mbtnPosition_4 = btnPosition_4 - btnPosition_3 ;
		btnPosition_5 = $('.slider_5').position().left;

		mbtnPosition_5 = btnPosition_5 - btnPosition_4;
		mbtnPosition_6 = btnPosition_5 - btnPosition_4;

		 btnPosition_31 = $('.slider_31').position().left;
		 btnPosition_32 = $('.slider_32').position().left;
		 mbtnPosition_31 = btnPosition_32 - btnPosition_31 - bntHalfWidth;
		 btnPosition_33 = $('.slider_33').position().left;
		 mbtnPosition_32 =  btnPosition_33 - btnPosition_32 - bntHalfWidth ;
		 mbtnPosition_33 = btnPosition_33 - btnPosition_32 - bntHalfWidth;
	});



});//document ready

let tm = new TimelineMax();
let tlStartCa = new TimelineMax();
let tlStartK = new TimelineMax();
let tl2 = new TimelineMax();
let tl3 = new TimelineMax();
let lnMax = new TimelineMax();
let lnMax2 = new TimelineMax();

let yo9 = document.querySelector('.yo-9');
let yo10 = document.querySelector('.yo-10');
let yo11 = document.querySelector('.yo-11');
let yo12 = document.querySelector('.yo-12');
let yo13 = document.querySelector('.yo-13');
let yo14 = document.querySelector('.yo-14');
let yo15 = document.querySelector('.yo-15');
let yo16 = document.querySelector('.yo-16');
let yo17 = document.querySelector('.yo-17');
let yo18 = document.querySelector('.yo-18');
let yo19 = document.querySelector('.yo-19');
let yo20 = document.querySelector('.yo-20');

let ca1 = document.querySelector('.ca-1');
let ca2 = document.querySelector('.ca-2');
let ca3 = document.querySelector('.ca-3');
let ca4 = document.querySelector('.ca-4');
let ca5 = document.querySelector('.ca-5');
let k1 = document.querySelector('.k-1');
let k2 = document.querySelector('.k-2');
let k3 = document.querySelector('.k-3');
let k4 = document.querySelector('.k-4');
let k5 = document.querySelector('.k-5');
let k6 = document.querySelector('.k-6');

let formula = $('.active-parent').find('.forn');
let delActive = $('.active-parent').find('.explan');

let line = $('.slider__scale_line');
let line2 = $('.slider__scale_line2');

var bntHalfWidth = ($('.slider_2').width() / 2 )

let btnPosition_1 = $('.slider_1').position().left;
let btnPosition_2 = $('.slider_2').position().left;
let mbtnPosition_2 = btnPosition_2 - btnPosition_1 - bntHalfWidth;
let btnPosition_3 = $('.slider_3').position().left;
let mbtnPosition_3 =  btnPosition_3 - btnPosition_2 - bntHalfWidth ;

let btnPosition_4 = $('.slider_4').position().left;
let mbtnPosition_4 = btnPosition_4 - btnPosition_3 ;
let btnPosition_5 = $('.slider_5').position().left;

let mbtnPosition_5 = btnPosition_5 - btnPosition_4;
let mbtnPosition_6 = btnPosition_5 - btnPosition_4;


let btnPosition_31 = $('.slider_31').position().left;
let btnPosition_32 = $('.slider_32').position().left;
let mbtnPosition_31 = btnPosition_32 - btnPosition_31 - bntHalfWidth;
let btnPosition_33 = $('.slider_33').position().left;
let mbtnPosition_32 =  btnPosition_33 - btnPosition_32 - bntHalfWidth ;
let mbtnPosition_33 = btnPosition_33 - btnPosition_32 - bntHalfWidth;


// console.log(mbtnPosition_31);
// console.log(mbtnPosition_32);
// console.log(mbtnPosition_33);
// console.log(line2.width());


lnMax
	.to(line, .6, {
		x: '+='+mbtnPosition_2,
		onStart: function () {
			formula.addClass('is-loaded');
			showText(txt1);
		},
	})
	.add('one')
	.addPause()
	.to(line, 1.6, {
		x: '+='+mbtnPosition_3,
		onStart: function () {
			formula.addClass('is-loaded');
			showText(txt1);
		},
	})
	.add('two')
	.addPause()
	.to(line, .6, {
		x: '+='+mbtnPosition_4,
	})
	.add('three')
	.addPause()
	.to(line, .6, {
		x: '+='+mbtnPosition_5,
	})
	.add('four')
	.addPause()
	.to(line, .6, {
		x: '+='+mbtnPosition_6,
	})
	.add('five')
	.addPause();

lnMax.pause();

lnMax2
	.to(line2, 1.6, {
		x: '+='+mbtnPosition_31,
	})
	.add('one')
	.addPause()
	.to(line2, 1.6, {
		x: '+='+mbtnPosition_32,
	})
	.add('two')
	.addPause()
	.to(line2, 1.6, {
		x: '+='+mbtnPosition_33,
	})
	.add('three')
	.addPause()
	.to(line2, 1.6, {
		x: '+='+mbtnPosition_31,
	})
	.add('four')
	.addPause()

lnMax2.pause();


let showElTwo = $('.active-parent').find('[data-second]');
let showElThree = $('.active-parent').find('[data-three]');
let showElFour = $('.active-parent').find('[data-four]');
let showElFourEnd = $('.active-parent').find('[data-four-end]');
let showElFourStart = $('.active-parent').find('[data-four-start]');
let showElFive = $('.active-parent').find('[data-five]');


const txt31 = $('.explan-31');
const txt32 = $('.explan-32');
const txt33 = $('.explan-33');
const txt1 = $('.explan-1');
const txt2 = $('.explan-2');
const txt3 = $('.explan-3');
const txt4 = $('.explan-4');
const txt5 = $('.explan-5');


function showText(arg) {
	if(arg) {
		$('.explan').removeClass('is-active');
		// for (var i = delActive.length - 1; i >= 0; i--) {
		// 	delActive[i].classList.remove('is-active');
		// }
		arg.addClass('is-active');
	}
	return false;
}

/*----- ca -------- */
	let startCa1 = [
		{top: '0%', left: '100%'},
		{top: '22%', left: '96%'}
	];

	let startCa2 = [
			{top: '16%', left: '100%'},
			{top: '33%', left: '89%'}
		];
	let startCa3 = [
			{top: '0%', left: '90%'},
			{top: '13%', left: '84%'}
		];
	let startCa4 = [
			{top: '16%', left: '90%'},
			{top: '28%', left: '80%'}
		];
	let startCa5 = [
			{top: '0%', left: '80%'},
			{top: '17%', left: '75%'}
		];
/*------- k ------------------*/
	let startK1 = [
			{top: '0%', left: '0%'},
			{top: '42%', left: '4%'},
			{top: '53%', left: '13%'},
			{top: '79%', left: '23%'},
			{top: '83%', left: '33%'}
		];
	let startK2 = [
			{top: '16%', left: '3%'},
			{top: '46%', left: '12%'},
			{top: '103%', left: '30%'}
		];
	let startK3 = [
			{top: '0%', left: '10%'},
			{top: '26%', left: '10%'},
			{top: '53%', left: '13%'},
			{top: '87%', left: '23%'},
		];

	let startK4 = [
			{top: '0%', left: '0%'},
			{top: '42%', left: '4%'}
		];
		if($(document).width() < 720 ){
			startK4 = [
				{top: '0%', left: '0%'},
				{top: '50%', left: '4%'}
			];
		}
	let startK5 = [
			{top: '-16%', left: '-20%'},
			{top: '16%', left: '3%'},
			{top: '46%', left: '12%'}
		];
		if($(document).width() < 720 ){
			startK5 = [
				{top: '-16%', left: '-20%'},
				{top: '16%', left: '3%'},
				{top: '54%', left: '12%'}
			];
		}
	let startK6 = [
			{top: '0%', left: '10%'},
			{top: '26%', left: '10%'}
		];
		if($(document).width() < 720 ){
			startK6 = [
				{top: '0%', left: '10%'},
				{top: '37%', left: '10%'}
			];
		}
/*------ btn2 options---------------*/
	let tl2k4 = [
			{top: '42%', left: '4%'},
			{top: '43%', left: '6%'},
			{top: '48%', left: '10%'},
			{top: '43%', left: '6%'}

		];
	let tl2k5 = [
			{top: '46%', left: '12%'}
		];
	let tl2k6 = [
			{top: '26%', left: '10%'},
			{top: '33%', left: '11%'},
			{top: '45%', left: '11%'},
			{top: '33%', left: '11%'}
		];
		if($(document).width() < 720 ){
			tl2k6 = [
				{top: '37%', left: '10%'},
				{top: '33%', left: '11%'},
				{top: '45%', left: '11%'},
				{top: '33%', left: '11%'}
			];
		}
/*-------  btn3 options- -----------*/
	let caMoveIn1 = [
		{top: '22%', left: '96%'}, /*-4-*/
		{top: '41%', left: '84%'},
		{top: '80%', left: '75%'},
		{top: '64%', left: '70%'}
	];
	if ($(window).width() < 651 ) {
		caMoveIn1 = [
			{top: '28%', left: '80%'},
			{top: '42%', left: '86%'},
			{top: '73%', left: '77%'},
			{top: '93%', left: '61%'}
		];
	}
	let caMoveIn3 = [
		{top: '33%', left: '89%'}, /*-5-*/
		{top: '40%', left: '84%'},
		{top: '68%', left: '78%'},
		{top: '79%', left: '68%'}
	];
	let caMoveIn2 = [
		{top: '13%', left: '84%'}, /*-2-*/
		{top: '43%', left: '84%'},
		{top: '96%', left: '71%'},
	];
	let caMoveIn4 = [
		{top: '28%', left: '80%'}, /*-1-*/
		{top: '42%', left: '86%'},
		{top: '73%', left: '77%'},
		{top: '58%', left: '64%'}
	];

	if ($(window).width() < 651 ) {
		caMoveIn4 = [
			{top: '28%', left: '80%'}, /*-1-*/
			{top: '42%', left: '86%'},
			{top: '73%', left: '77%'},
			{top: '68%', left: '64%'}
		];
	}


	let caMoveIn5 = [
		{top: '17%', left: '75%'}, /*-3-*/
		{top: '43%', left: '85%'},
		{top: '80%', left: '75%'}
	];

tlStartCa
	.to(ca1, .6, {
		bezier : {
			values: startCa1
		},
		onStart: function () {
			formula.addClass('is-loaded');
			showText(txt1);
		},
		// onComplete: function () {
		// }
	}, '-=.4')
	.to(ca2, .6, {
		bezier : {
			values: startCa2
		}
	}, '-=.4')
	.to(ca4, .6, {
		bezier : {
			values: startCa4
		}
	}, '-=.4')
	.to(ca3, .6, {
		bezier : {
			values: startCa3
		}
	}, '-=.4')
	.to(ca5, .6, {
		bezier : {
			values: startCa5
		},
		delay: 0
	}, '-=.4');
tlStartCa.pause();

tlStartK
	.to(k1, .6, {
		bezier : {
			values: startK1
		},
		delay: .9
	}, '-=.4')
	.to(k2, .6, {
		bezier : {
			values: startK2
		},
	}, '-=.4')
	.to(k3, .6, {
		bezier : {
			values: startK3
		},
	}, '-=.4')
	.to(k4, .6, {
		bezier : {
			values: startK4
		},
	}, '-=.5')
	.to(k5, .6, {
		bezier : {
			values: startK5
		},
	}, '-=.5')
	.to(k6, .6, {
		bezier : {
			values: startK6
		},
	}, '-=.5');
tlStartK.pause();


/*----- btn2 build  animation------------*/
tl2
	.to(k4, 1, {
		bezier: {
			values: tl2k4
		},
		onStart: function () {
			for (let i = showElTwo.length - 1; i >= 0; i--) {
				showElTwo[i].classList.remove('is-hidden');
			}
			showText(txt2);
		},
		delay: .5})
	.to(k5, 1, {
		bezier: {
			values: tl2k5
		},
		delay: '-= .8'}, '-= 1')
	.to(k6, 1, {
		bezier: {
			values: tl2k6
		}, delay: '-= .8'}, '-= 1');
tl2.pause();

tl3
	.to(ca4, 1.6, {
		bezier: {
			values: caMoveIn4
		},
		onStart: function () {
			showText(txt3);
		}
	})
	.to(ca2, 1.6, {
		bezier: {
			values: caMoveIn2
		}
	}, '-= 1')
	.to(ca5, 1.6, {
		bezier: {
			values: caMoveIn5
		}
	}, '-= 1')
	.to(ca1, 1.6, {
		bezier: {
			values: caMoveIn1
		}
	}, '-= 1')
	.to(ca3, 1.6, {
		bezier: {
			values: caMoveIn3
		}
	}, '-= 1');
tl3.pause();


/*----- options -------*/
	let tlYo9 = [
		{top: '-9%', left: '20%'},
		{top: '36%', left: '30%'},
		{top: '59%', left: '37%'},
		{top: '38%', left: '54%'}
	];
	let tlYo10 = [
		{top: '11%', left: '-6%'},
		{top: '36%', left: '30%'},
		{top: '60%', left: '37%'},
		{top: '38%', left: '45%'}
	];
	let tlYo11 = [
		{top: '-10%', left: '-10%'},
		{top: '36%', left: '30%'},
		{top: '60%', left: '37%'},
		{top: '64%', left: '30%'}
	];
	let tlYo12 = [
		{top: '-15%', left: '-17%'},
		{top: '36%', left: '30%'},
		{top: '60%', left: '37%'},
		{top: '49%', left: '50%'}
	];
	let tlYo13 = [
		{top: '-17%', left: '-17%'},
		{top: '7%', left: '7%'},
		{top: '36%', left: '30%'},
		{top: '60%', left: '37%'}
	];
	let tlYo14 = [
		{top: '-6%', left: '-16%'},
		{top: '6%', left: '16%'},
		{top: '28%', left: '16%'},
		{top: '28%', left: '32%'},
		{top: '24%', left: '40%'}
	];
	let tlYo16 = [
		{top: '16%', left: '190%'},
		{top: '16%', left: '97%'},
		{top: '70%', left: '97%'},
		{top: '81%', left: '84%'},
		{top: '50%', left: '40%'}
	];
	let tlYo17 = [
		{top: '180%', left: '197%'},
		{top: '80%', left: '97%'},
		{top: '76%', left: '97%'},
		{top: '85%', left: '84%'},
		{top: '55%', left: '61%'}
	];
	let tlYo18 = [
		{top: '-16%', left: '80%'},
		{top: '6%', left: '80%'},
		{top: '34%', left: '91%'},
		{top: '59%', left: '73%'},
		{top: '40%', left: '61%'}
	];
	let tlYo19 = [
		{top: '30%', left: '197%'},
		{top: '30%', left: '97%'},
		{top: '34%', left: '91%'},
		{top: '59%', left: '73%'},
		{top: '46%', left: '63%'}
	];


tm
	.to(yo9, .6, {
		bezier : {
			values: tlYo9
		},
		onStart: function () {
			for (let i = showElThree.length - 1; i >= 0; i--) {
				showElThree[i].classList.remove('is-hidden');
			}
		},
		delay: .4,
	}, '-=.4')

	.to(yo10, .6, {
		bezier : {
			values: tlYo10
		}
	}, '-=.4')
	.to(yo11, .6, {
		bezier : {
			values: tlYo11
		}
	}, '-=.4')
	.to(yo12, .6, {
		bezier : {
			values: tlYo12
		}
	}, '-=.4')
	.to(yo13, .6, {
		bezier : {
			values: tlYo13
		}
	}, '-=.4')
	.to(yo14, .6, {
		bezier : {
			values: tlYo14
		}
	}, '-=.4')
	.to(yo16, .6, {
		bezier : {
			values: tlYo16
		}
	}, '-=.4')
	.to(yo17, .6, {
		bezier : {
			values: tlYo17
		}
	}, '-=.4')
	.to(yo18, .6, {
		bezier : {
			values: tlYo18
		}
	}, '-=.4')
	.to(yo19, .6, {
		bezier : {
			values: tlYo19
		},
		delay: 0
	}, '-=.4');

tm.pause();

