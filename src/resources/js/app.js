// Сюда загружаем скрипты (к примеру slick)
// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
// import * as flsFunctions from "./modules/functions"
// flsFunctions.name_function(); // прописываем все функции из functions.js

import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
