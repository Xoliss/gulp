// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
// import * as flsFunctions from "./modules/functions"
// flsFunctions.name_function(); // прописываем все функции из functions.js

import Swiper from "swiper";
import { Controller, Navigation, Pagination } from 'swiper/modules';


let swiperStandart = new Swiper('.swiper--standart', {
    modules: [Navigation, Pagination],

    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiperMini = new Swiper('.swiper--mini', {
    modules: [Navigation, Pagination],

    loop: true,
    slidesPerView: 1,
    nested: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    controller: {
        control: swiperStandart
    },
});

swiperMini.controller.control = swiperStandart;
swiperStandart.controller.control = swiperMini;
