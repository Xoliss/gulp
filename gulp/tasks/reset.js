import del from "del";
export const reset = () => {
    return del(app.path.clean); // функция удаления (в папке с результатом) удаленных файлов из основного проекта
}