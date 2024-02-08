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

function watcher() {
    gulp.watch(path.watch.files, copy)  // (Пусть к файлам, за которыми нужно следить, задача которую нужно выполнить)
}

const dev = gulp.series(reset, copy, watcher); // последовательность задаяч в режиме разработчика (сначала мы удаляем папку с результатом, потом копируем файлы, потом запускаем наблюдателя)

// Выполнение сценария по умолчанию
gulp.task('default', dev);