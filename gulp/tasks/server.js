export const server = (done) => {
    app.plugins.browsersync.init ({ // запускаем browsersync 
        server: {
            baseDir: `${app.path.build.html}` // папка из которой мы берем файлы (html файлы)
        },
        notify: false, // Убираем сообщения в браузере
        port: 3000,
    });
}