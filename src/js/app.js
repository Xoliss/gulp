// Разрешает работу с модулями (точнее их подкачку из node_modules, а также позволяет загружать скрипты js)
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();