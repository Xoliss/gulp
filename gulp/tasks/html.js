import fileinclude from "gulp-file-include";

export const html = () => {
    return app.gulp.src(app.path.src.html) // получаем доступ к файлам и папкам по указанному пути
        .pipe(fileinclude())
        .pipe(app.gulp.dest(app.path.build.html)) // Путь назначения
}