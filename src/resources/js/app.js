// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
// import * as flsFunctions from "./modules/functions"
// flsFunctions.name_function(); // прописываем все функции из functions.js

import Swiper from "swiper";

import IMask from 'imask';

import { Navigation, Controller, Pagination } from 'swiper/modules'

import * as flsFunctions from "./modules/functions.js";


let swiperStandart = new Swiper('.swiper--standart');

let swiperLarge = new Swiper('.swiper--large');

let swiperMini = new Swiper('.swiper--mini', {

    modules: [Navigation, Controller],

    loop: true,
    slidesPerView: 3,
    nested: true,
    slidesPerGroup: 1,

    controller: {
        control: swiperStandart
    },

});

new Swiper('.swiper--standart', {
    modules: [Navigation, Controller],

    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    controller: {
        control: swiperMini
    },
});

new Swiper('.swiper--large', {
    modules: [Navigation, Pagination, Controller],

    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },      

    controller: {
        control: swiperMini
    },
});


// swiperMini.controller.control = swiperStandart;
// swiperStandart.controller.control = swiperMini;
