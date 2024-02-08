import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number"

export const html = () => {
    return app.gulp.src(app.path.src.html) // получаем доступ к файлам и папкам по указанному пути
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message%>"
            }))
        )
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNosvg())
        .pipe (
            versionNumber ({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html)) // Путь назначения
}