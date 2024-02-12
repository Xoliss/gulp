// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
import * as flsFunctions from "./modules/functions.js";
import jquery from "jquery";

// Загрузка сладера (Siper), но в данной работе он не используется

flsFunctions.isWebp();
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

// Настройка слайдеров

import "slick-carousel";

jquery(".carousel--big").slick({
    dots: false,
    slidesToShow: 1, // сколько слайдов на экране (по умолчанию 1, но можно и поставить 2, 3...)
    infinite: true, // значение бесконечности (после конечного слайда будет переноситься в начало)
    initialSlide: 0, // какой слайд первый
    touchThreshold: 10, // какое расстояние нужно просвайпить чтобы фото сменилось
    waitForAnimate: false, // можно быстро нажимать на стрелочки (и фото будут двигаться, не дожидаясь конца анимации)
    fade: true,
    asNavFor: ".carousel--small",
});
jquery(".carousel--small").slick({
    dots: true,
    slidesToShow: 3, // сколько слайдов на экране (по умолчанию 1, но можно и поставить 2, 3...)
    infinite: true, // значение бесконечности (после конечного слайда будет переноситься в начало)
    initialSlide: 0, // какой слайд первый
    touchThreshold: 10, // какое расстояние нужно просвайпить чтобы фото сменилось
    waitForAnimate: false, // можно быстро нажимать на стрелочки (и фото будут двигаться, не дожидаясь конца анимации)
    centerMode: true,
    asNavFor: ".carousel--big",
});