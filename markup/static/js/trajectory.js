'use strict';

// const $ = require('jquery');
// const gsap = require('gsap');
import $ from "jquery";
import {TimelineMax} from "gsap/TimelineMax";


let tf = new TimelineMax();
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

var bntHalfWidth = ($('.slider_2').width() / 2 );

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


/* --- first page var -- */

var fog = $('.picture__fog');
var fPic = $(' .picture__img')
var fOn = $(' .picture_on')
var fCheck = $('.toggler__checkbox')

tf
	.set(fPic, {className: "-=is-active", delay: 3})
	.set(fOn, {className: "+=is-active", delay: 3}, '-=3')
	.set(fCheck, {className: "+=is-active", delay: 3}, '-=3')
	.set(fog, {className: "+=is-active", delay: 3.2}, '-=2.8');
tf.pause();

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

	var startK4 = [
			{top: '0%', left: '0%'},
			{top: '42%', left: '4%'}
		];
		if($(document).width() < 720 ){
			startK4 = [
				{top: '0%', left: '0%'},
				{top: '53%', left: '1%'}
			];
		}
	var startK5 = [
			{top: '-16%', left: '-20%'},
			{top: '16%', left: '3%'},
			{top: '46%', left: '12%'}
		];
		if($(document).width() < 720 ){
			startK5 = [
				{top: '-16%', left: '-20%'},
				{top: '16%', left: '3%'},
				{top: '55%', left: '9%'}
			];
		}
	var startK6 = [
			{top: '0%', left: '10%'},
			{top: '26%', left: '10%'}
		];
		if($(document).width() < 720 ){
			startK6 = [
				{top: '0%', left: '10%'},
				{top: '39%', left: '8%'}
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
