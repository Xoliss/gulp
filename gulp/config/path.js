// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`; // Содержит путь к папке с результом
const srcFolder = `./src`; // Содержит путь к папке с имходниками


export const path = {
    build: { // объект путей к папке с результатом
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/` // переносим исходные файлы именно в эту папку
    }, 
    src: { // объект путей к исходным файлам
        html: `${srcFolder}/*.pug`, // из исходников будем получать файлы, которые находят в src
        files: `${srcFolder}/files/**/*.*`, // путь к папке с файлами, которые нужно будет скопировать; srcFolder - папка с исходниками; папка files, из нее будут переноситься файлы; ** - проверка файлы в любых вложенных папках внутри папки files; *.* проверка всех файлов с любыми названиями
    }, 
    watch: { // автоматический перенос файлов в наш результат (dist/files)
        html: `${srcFolder}/**/*.pug`, // Наблюдем за html афйлами, которые в src и в других подпапках src
        files: `${srcFolder}/files/**/*.*`,
    }, 
    clean: buildFolder, // clean = папке с результатом
    buildFolder: buildFolder, // сама папка с результатом
    srcFolder: srcFolder, // папка с исходниками
    rootFolder: rootFolder, // название текущей папке проекта
    ftp: '' // где можно указать папку на удаленном ftp - сервере
}