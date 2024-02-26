// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
// import * as flsFunctions from "./modules/functions"
// flsFunctions.name_function(); // прописываем все функции из functions.js

import Swiper from "swiper";

import SwiperSlide from "swiper";

import IMask from "imask";

import { Navigation, Controller, Pagination, Thumbs} from "swiper/modules";

import * as flsFunctions from "./modules/functions.js";

// 1 slider

let swiperStandart = new Swiper(".swiper--standart");

let swiperLarge = new Swiper(".swiper--large");

let swiperMini = new Swiper(".swiper--mini", {
  modules: [Navigation, Controller, Thumbs],
 
	spaceBetween: 19,
	slidesPerView: 3,
	watchSlidesProgress: true,
	loop: true,
	updateOnWindowResize: true,
	observer: true,
	observeParents: true,
});

new Swiper(".swiper--standart", {
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
		swiper: swiperMini,
	},

});

new Swiper(".swiper--large", {
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
		swiper: swiperStandart,
	},
});


// 2 slider

let swiperStandart2 = new Swiper(".swiper--standart--2");

let swiperLarge2 = new Swiper(".swiper--large--2");

let swiperMini2= new Swiper(".swiper--mini--2", {
  modules: [Navigation, Controller, Thumbs],
 
	spaceBetween: 19,
	slidesPerView: 3,
	watchSlidesProgress: true,
	loop: true,
	updateOnWindowResize: true,
	observer: true,
	observeParents: true,
});

new Swiper(".swiper--standart", {
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
		swiper: swiperMini2,
	},

});

new Swiper(".swiper--large", {
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
		swiper: swiperStandart2,
	},
});
