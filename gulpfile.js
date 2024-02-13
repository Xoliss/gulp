// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передае значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from  "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Наш наблюдатель
function watcher() {
    gulp.watch(path.watch.files, copy);  // (Пусть к файлам, за которыми нужно следить, задача которую нужно выполнить)
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);

}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)); // Одновременное выполнение задач: копирование файлов из src и задача html

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel (watcher, server)); // последовательность задач в режиме разработчика (сначала мы удаляем папку с результатом, потом открывается сервер паралельно с наблюдателей (чтобы файлы на сервере сразу менялись после их обновления в коде)

// Выполнение сценария по умолчанию
gulp.task('default', dev);