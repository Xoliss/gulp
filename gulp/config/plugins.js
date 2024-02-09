import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (об ошибке, к примеру)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // обновилась ли картинка действительно (плагин)


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
}