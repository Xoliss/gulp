export const copy = () => {
    return app.gulp.src(app.path.src.files) // получаем доступ к файлам и папкам по указанному пути
        .pipe(app.gulp.dest(app.path.build.files)) // Путь назначения
}