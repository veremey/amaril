'use strict';

const $ = require('jquery');
const gsap = require('gsap');
const TimelineMax = gsap.TimelineMax;
// ---------------------------------------------------------
$(document).ready(function () {

	var on = true;
	var off = false;
	var tl = new TimelineMax();

	var firstOne = $('.iteration_first').find('.statistic_first');
	var firstOneHeigth = firstOne.height();
	var firstTwo = $('.iteration_first').find('.statistic_second');
	var firstTwoHeigth = firstTwo.height();

	var secondOne = $('.iteration_second').find('.statistic_first');
	var secondOneHeigth = secondOne.height();
	var secondTwo = $('.iteration_second').find('.statistic_second');
	var secondTwoHeigth = secondTwo.height();

	var thirdOne = $('.iteration_third').find('.statistic_first');
	var thirdOneHeigth = thirdOne.height();
	var thirdTwo = $('.iteration_third').find('.statistic_second');
	var thirdTwoHeigth = thirdTwo.height();


// -------------------------------------------------------------------
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
// --------------------------------------------------------
// --- page five  --------------------
	$('.highlight').hover(
		function () {
			var light = $(this).data('highlight');
			$('.' + light).addClass('show-light');
		},
		function () {
			var light = $(this).data('highlight');
			$('.' + light).removeClass('show-light');
		});

	tl
		.to(firstOne, .8, {y: -firstOneHeigth})
		.to(firstTwo, .8, {y: -firstTwoHeigth})
		.to(secondOne, .8, {y: -secondOneHeigth})
		.to(secondTwo, .8, {y: -secondTwoHeigth})
		.to(thirdOne, .8, {y: -thirdOneHeigth})
		.to(thirdTwo, .8, {y: -thirdTwoHeigth});
/*---------------------------------------------------------*/
/*------  page two  -----------------*/

	let getPage = document.querySelector('.page');
	let tlStartCa = new TimelineMax();
	let tlStartK = new TimelineMax();
	let tl2 = new TimelineMax();
	let tl3 = new TimelineMax();
	let formula = document.querySelector('.formula');

	let sliderBtns = document.getElementsByClassName('slider__btn');
	let btn1 = document.querySelector('.slider_1');
	let btn2 = document.querySelector('.slider_2');
	let btn3 = document.querySelector('.slider_3');
	let btn4 = document.querySelector('.slider_4');
	let btn5 = document.querySelector('.slider_5');

	let showElTwo = document.querySelectorAll('[data-second]');
	let showElThree = document.querySelectorAll('[data-three]');
	let showElFour = document.querySelectorAll('[data-four]');
	let showElFourEnd = document.querySelectorAll('[data-four-end]');
	let showElFive = document.querySelectorAll('[data-five]');

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

/*------- anim options  ----------------------*/
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
	/*------- start ------------------*/
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
		let startK5 = [
				{top: '16%', left: '3%'},
				{top: '46%', left: '12%'}
			];
		let startK6 = [
				{top: '0%', left: '10%'},
				{top: '26%', left: '10%'}
			];
	/*------ start animation-------------------------*/
		tlStartCa
			.to(ca1, .6, {
				bezier : {
					values: startCa1
				},
				onStart: function () {
					formula.classList.add('is-loaded');
				}
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
			}, '-=.4')
			.to(k5, .6, {
				bezier : {
					values: startK5
				},
			}, '-=.4')
			.to(k6, .6, {
				bezier : {
					values: startK6
				},
			}, '-=.4');
			tlStartK.pause();

	/*------ btn2 click options---------------*/
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
	/* ----- btn2 click animation ---- */
		tl2
			.to(k4, 1, {
				bezier: {
					values: tl2k4
				}, delay: .5})
			.to(k5, 1, {
				bezier: {
					values: tl2k5
				}, delay: '-= .8'}, '-= 1')
			.to(k6, 1, {
				bezier: {
					values: tl2k6
				}, delay: '-= .8'}, '-= 1');
			tl2.pause();
	/*-------  tl3  -----------*/

		let caMoveIn1 = [
			{top: '22%', left: '96%'}, /*-4-*/
			{top: '41%', left: '84%'},
			{top: '80%', left: '75%'},
			{top: '64%', left: '70%'}

		];
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
		let caMoveIn5 = [
			{top: '17%', left: '75%'}, /*-3-*/
			{top: '43%', left: '85%'},
			{top: '80%', left: '75%'}
		];

	tl3
		.to(ca4, 1.6, {
			bezier: {
				values: caMoveIn4
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

/*-------- anim on page load ----------------------*/
	if(getPage.classList.contains('page-two')) {
		/*---- anim start-------*/
		tlStartK.play();
		tlStartCa.play();
	}

/*--------btn1-----------------------*/
	btn1.addEventListener('click', function () {
		/*--- detect last animation step ---------*/
		switch (getActiveBtn()) {
			case 5:
				/*---- remove what to do in 5 -----*/
				let box = document.querySelector('.stimulant');
				let getPic = document.querySelector('.formula__pic');
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

			case 2:
				/*---- remove what to do in 2  ------*/
				for (let i = showElTwo.length - 1; i >= 0; i--) {
					showElTwo[i].classList.add('is-hidden');
				}
				tl2.reverse().timeScale(8);

				/*------------*/
			case 1:
				formula.classList.remove('is-loaded');
				tlStartK.restart();
				tlStartCa.restart();
				break;
			default:
				console.log('// statements_def');
				break;
		}
		/*---- do animation----------*/
		for (let i = sliderBtns.length - 1; i >= 0; i--) {
				sliderBtns[i].classList.remove('is-active');
		}
		this.classList.add('is-active');

		tlStartK.restart();
		tlStartCa.restart();

	}, false);

/*-------- btn2 ------------------------*/
	btn2.addEventListener('click', function () {
		switch (getActiveBtn()) {
			case 5:
				/*---- remove what to do in 5 -----*/
				let box = document.querySelector('.stimulant');
				let getPic = document.querySelector('.formula__pic');
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

			case 2:
				break;
				/*------------*/
			case 1:
				break;
			default:
				console.log('// statements_def');
				break;
		}

		for (let i = sliderBtns.length - 1; i >= 0; i--) {
				sliderBtns[i].classList.remove('is-active');
		}
		for (let i = showElTwo.length - 1; i >= 0; i--) {
			showElTwo[i].classList.remove('is-hidden');
		}
		this.classList.add('is-active');

		tl2.play().timeScale(1);
	}, false);

/*-------- btn3 ----------------*/
	btn3.addEventListener('click', function () {
		switch (getActiveBtn()) {
			case 5:
				/*---- remove what to do in 5 -----*/
				let box = document.querySelector('.stimulant');
				let getPic = document.querySelector('.formula__pic');
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
				/*---- do step 1 faster ------*/
				/*---- 1-st step always in start -----*/
			case 2:
				/*---- do step 2 faster ------*/
				for (let i = showElTwo.length - 1; i >= 0; i--) {
					showElTwo[i].classList.remove('is-hidden');
				}
				this.classList.add('is-active');

				tl2.play().timeScale(1);
				break;
				/*------------*/
			default:
				console.log('// statements_def');
				break;
		}

		for (let i = sliderBtns.length - 1; i >= 0; i--) {
				sliderBtns[i].classList.remove('is-active');
		}
		for (let i = showElThree.length - 1; i >= 0; i--) {
			showElThree[i].classList.add('is-hidden');
		}
		this.classList.add('is-active');
		tl3.play().timeScale(1);

	}, false);
/*-------- btn4 ------------------*/
	btn4.addEventListener('click', function () {
		switch (getActiveBtn()) {
			case 5:
				/*---- remove what to do in 5 -----*/
				let box = document.querySelector('.stimulant');
				let getPic = document.querySelector('.formula__pic');
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
				/* -- you are here -*/

			case 1:
				/*---- do step 1 faster ------*/
				/*---- 1-st step always in start -----*/
			case 2:
				/*---- do step 2 faster ------*/
				for (let i = showElTwo.length - 1; i >= 0; i--) {
					showElTwo[i].classList.remove('is-hidden');
				}
				this.classList.add('is-active');

				tl2.play().timeScale(4);
				/*------------*/
			case 3:
				/*---- do step 2 faster ------*/
				for (let i = showElThree.length - 1; i >= 0; i--) {
					showElThree[i].classList.add('is-hidden');
				}
				this.classList.add('is-active');
				tl3.play().timeScale(4);
			default:
				console.log('// statements_def');
				break;
		}

		for (let i = sliderBtns.length - 1; i >= 0; i--) {
				sliderBtns[i].classList.remove('is-active');
		}
		for (let i = showElFour.length - 1; i >= 0; i--) {
			showElFour[i].classList.remove('is-hidden');
		}
		this.classList.add('is-active');
	}, false);
/*--------- btn5 -----------------*/
	btn5.addEventListener('click', function () {
		switch (getActiveBtn()) {
			case 5:
				/* -- you are here -*/
			case 1:
				/*---- 1-st step always in start -----*/
			case 2:
				/*---- do step 2 faster ------*/
				for (let i = showElTwo.length - 1; i >= 0; i--) {
					showElTwo[i].classList.remove('is-hidden');
				}
				this.classList.add('is-active');/*-?-*/
				tl2.play().timeScale(4);

			case 3:
				/*---- do step 3 faster ------*/
				for (let i = showElThree.length - 1; i >= 0; i--) {
					showElThree[i].classList.add('is-hidden');
				}
				this.classList.add('is-active');/*-?-*/
				tl3.play().timeScale(4);
			case 4:
				/*---- do step 4 faster ------*/
				for (let i = showElFour.length - 1; i >= 0; i--) {
					showElFour[i].classList.remove('is-hidden');
				}
				this.classList.add('is-active');/*-?-*/
			default:
				console.log('// statements_def');
				break;
		}

		let box = document.querySelector('.stimulant');
		let getPic = document.querySelector('.formula__pic');
		let newPic = 'static/img/content/two/formula-01.png';

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

		box.classList.add('is-removed');
		this.classList.add('is-active');

		// getActiveBtn();


	}, false);



// switch (getActiveBtn) {
// 	case 0:
// 		console.log('last active1');
// 		break;
// 	case 1:
// 		console.log('last active2');
// 		break;
// 	case 2:
// 		console.log('last active3');
// 		break;
// 	case 3:
// 		console.log('last active4');
// 		break;
// 	case 4:
// 		console.log('last active5');
// 		break;
// 	default:
// 		// statements_def
// 		break;
// }

// --------------------------------------------------------
// --- page three  --------------------

	let tm = new TimelineMax();

	let btnPlayTwo = document.querySelector('.play-page-two');

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
	/*----------------------------------------------------*/
	if(getPage.classList.contains('page-thre')) {
		/* - btn1 click - */
			btn1.addEventListener('click', function () {
				if(btn3.classList.contains('is-active') ){
					btn3.classList.remove('is-active');
					this.classList.add('is-active');
					removeThree();
					setTimeout( removeTwo, 1500);
				} else {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
					}
					this.classList.add('is-active');
					removeThree();
					removeTwo();
				}
			}, false);
		/* -- btn2 click -- */
			btn2.addEventListener('click', function () {
				if(btn3.classList.contains('is-active') ){
					btn3.classList.remove('is-active');
					this.classList.add('is-active');
					removeThree();
					setTimeout( animateTwo, 1500);
				} else {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
					}
					this.classList.add('is-active');
					removeThree();
					animateTwo();
				}
			}, false);
		/* -- btn3 click -- */
			btn3.addEventListener('click', function () {
				for (let i = sliderBtns.length - 1; i >= 0; i--) {
					sliderBtns[i].classList.remove('is-active');
				}
				animateTwo();
				btn3.classList.add('is-active');
				setTimeout( function () {
					animateThree();
				}, 1500);

			}, false);
		/* -- playBtn click -- */
			btnPlayTwo.addEventListener('click', function () {
				if(btn3.classList.contains('is-active') ){
					/* back to 2-d position */
					btn3.classList.remove('is-active');
					removeThree();
					btn2.classList.add('is-active');
					/* back to 1 position */
					setTimeout( function () {
						removeTwo();
						btn2.classList.remove('is-active');
						btn1.classList.add('is-active');
					}, 1500);
					/* go to 2 position */
					setTimeout( function () {
						btn1.classList.remove('is-active');
						btn2.classList.add('is-active');
						animateTwo();
					}, 3000)
					/* go to 3 position */
					setTimeout( function () {
						btn2.classList.remove('is-active');
						btn3.classList.add('is-active');
						animateThree();
					}, 4500);
				} else {
					for (let i = sliderBtns.length - 1; i >= 0; i--) {
						sliderBtns[i].classList.remove('is-active');
					}
					btn2.classList.add('is-active');
					removeThree();
					animateTwo();
					setTimeout( function () {
						btn2.classList.remove('is-active');
						btn3.classList.add('is-active');
						animateThree();
					}, 1500);
				}
			}, false);
	};
	/* -------------animate options ------------------------- */
		/*----- options -------*/
			let tlYo9 = [
				{top: '0%', left: '20%'},
				{top: '36%', left: '30%'},
				{top: '59%', left: '37%'},
				{top: '38%', left: '54%'}
			];
			let tlYo10 = [
				{top: '11%', left: '0%'},
				{top: '36%', left: '30%'},
				{top: '60%', left: '37%'},
				{top: '38%', left: '45%'}
			];
			let tlYo11 = [
				{top: '0%', left: '0%'},
				{top: '36%', left: '30%'},
				{top: '60%', left: '37%'},
				{top: '84%', left: '30%'}
			];
			let tlYo12 = [
				{top: '5%', left: '7%'},
				{top: '36%', left: '30%'},
				{top: '60%', left: '37%'},
				{top: '49%', left: '50%'}
			];
			let tlYo13 = [
				{top: '7%', left: '7%'},
				{top: '36%', left: '30%'},
				{top: '60%', left: '37%'}
			];
			let tlYo14 = [
				{top: '6%', left: '16%'},
				{top: '28%', left: '16%'},
				{top: '28%', left: '32%'},
				{top: '24%', left: '40%'}
			];
			let tlYo16 = [
				{top: '16%', left: '97%'},
				{top: '70%', left: '97%'},
				{top: '81%', left: '84%'},
				{top: '90%', left: '40%'}
			];
			let tlYo17 = [
				{top: '80%', left: '97%'},
				{top: '76%', left: '97%'},
				{top: '85%', left: '84%'},
				{top: '55%', left: '61%'}
			];
			let tlYo18 = [
				{top: '6%', left: '80%'},
				{top: '34%', left: '91%'},
				{top: '59%', left: '73%'},
				{top: '40%', left: '61%'}
			];
			let tlYo19 = [
				{top: '30%', left: '97%'},
				{top: '34%', left: '91%'},
				{top: '59%', left: '73%'},
				{top: '46%', left: '63%'}
			];
	/*  ------ anim  --------------- */
		let mainClass = document.querySelector('.page__wrapper');
		if(mainClass.classList.contains('page-three')) {
			tm
				.to(yo9, 2.6, {
					bezier : {
						values: tlYo9
					}
				}, '-=2')
				.to(yo10, 2.6, {
					bezier : {
						values: tlYo10
					}
				}, '-=2.5')
				.to(yo11, 2.6, {
					bezier : {
						values: tlYo11
					}
				}, '-=2.6')
				.to(yo12, 2.6, {
					bezier : {
						values: tlYo12
					}
				}, '-=2.6')
				.to(yo13, 2.6, {
					bezier : {
						values: tlYo13
					}
				}, '-=2.6')
				.to(yo14, 2.6, {
					bezier : {
						values: tlYo14
					}
				}, '-=2.6')
				.to(yo16, 2.6, {
					bezier : {
						values: tlYo16
					}
				}, '-=2.6')
				.to(yo17, 2.6, {
					bezier : {
						values: tlYo17
					}
				}, '-=2.6')
				.to(yo18, 2.6, {
					bezier : {
						values: tlYo18
					}
				}, '-=2.6')
				.to(yo19, 2.6, {
					bezier : {
						values: tlYo19
					}
				}, '-=2.6');

			tm.reverse();
		}

/*------------ functions  -----------------------*/
	function animateTwo() {
		let i = showElTwo.length;
		for (i = showElTwo.length - 1; i >= 0; i--) {
			showElTwo[i].classList.remove('is-hidden');
		}
	}

	function removeTwo() {
		let i = showElTwo.length;
		for (i = showElTwo.length - 1; i >= 0; i--) {
			showElTwo[i].className += ' is-hidden';
		}
	}

// animate three
	function animateThree() {

		btn3.classList.add('is-active');
		let i = showElThree.length;
		for (i = showElThree.length - 1; i >= 0; i--) {
			showElThree[i].classList.remove('is-hidden');
		}
		tm.play();
	}
// remove three
	function removeThree() {
		let i = showElThree.length;
		tm.reverse();
		for (i = showElThree.length - 1; i >= 0; i--) {
			showElThree[i].className += ' is-hidden';
		}
	}

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




});


