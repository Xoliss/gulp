// Здесь описываем все функции
// функция проверки (Поддерживается ли браузером картинки WEBP?)
export function isWebp() {
    function testWebp (callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = ""
    }
    testWebp(function(support) {
        let className = support == true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className);
    });
}