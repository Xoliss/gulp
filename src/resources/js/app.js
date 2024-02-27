// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
// import * as flsFunctions from "./modules/functions"
// flsFunctions.name_function(); // прописываем все функции из functions.js

import Swiper from "swiper";

import SwiperSlide from "swiper";

import IMask from "imask";

import { Navigation, Controller, Pagination, Thumbs, Zoom} from "swiper/modules";

import * as flsFunctions from "./modules/functions.js";

// 1 slider


let swipers = document.querySelectorAll('.portfolio__swipers')


console.log(swipers)

swipers.forEach(el => {
	let standart = el.querySelector('.swiper--standart')
	let large = el.querySelector('.swiper--large')
	let mini = el.querySelector('.swiper--mini')


	
	
	 new Swiper(mini, {
	  modules: [Navigation, Controller, Thumbs],
	 
		spaceBetween: 19,
		slidesPerView: 3,
		watchSlidesProgress: true,
		loop: true,
		updateOnWindowResize: true,
		observer: true,
		observeParents: true,
	});
	
	new Swiper(standart, {
	  modules: [Navigation, Controller, Thumbs],
		loop: true,
	
		mousewheel: {
			invert: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: {
				el: mini,
				slidesPerView: 3,
				spaceBetween: 19,
			}
		},
	  // slideActiveClass: "Active",
	
	});
	
	new Swiper(large, {
	  modules: [Navigation, Pagination, Controller, Thumbs, Zoom],
		loop: true,
		preloadImages: false,
	
		mousewheel: {
			invert: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: standart,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		zoom: {
			maxRatio: 6,
			minRation: 1,
		},
		lazy: {
			loadOnTransitionStart: false,
	
			loadPrevNext: true,
		},
		// watchSlidesProgress: true,
		// watchSlidesVisibility: true,
	});
	

})



