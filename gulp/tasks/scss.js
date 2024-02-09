import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';;
import groupCSSMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true }) // собираем стили из многих (и будет показываться в каком именно)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <% =error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCSSMediaQueries())
        .pipe(webpcss(
            {
                webpClass: ".webp", // РАБОТАЕТ НА APPLE технике, Если браузер поддерживает это расширение, то будет использоться,
                noWebpClass: ".no-webp" // если нет, то не бдует
            }
        ))
        .pipe(autoprefixer({
            grid: true, 
            overrideBrowserslist: ["last 3 versions"], // Кол-во версий браузера (3 версии назад еще будут работать)
            cascade: true
        }))
        // Закоменти 1 нижнюю строку строку, если не нужен будет несжатый дуьль css файла
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}
