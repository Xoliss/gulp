// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";

// Передае значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from  "./gulp/tasks/html.js";
function watcher() {
    gulp.watch(path.watch.files, copy);  // (Пусть к файлам, за которыми нужно следить, задача которую нужно выполнить)
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html); // Одновременное выполнение задач: копирование файлов из src и задача html

const dev = gulp.series(reset, mainTasks, watcher); // последовательность задач в режиме разработчика (сначала мы удаляем папку с результатом, потом копируем файлы, потом запускаем наблюдателя)

// Выполнение сценария по умолчанию
gulp.task('default', dev);