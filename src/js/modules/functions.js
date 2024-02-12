// функция проверки (Поддерживается ли браузером картинки WEBP?)
export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = ""
    }
    testWebp(function (support) {
        let className = support == true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className);
    });
}
export function authorization() {
    document.addEventListener("DOMContentLoaded", () => { // загружает содержимое по загрузке всех элементов страницы
        let object = [ //создаем массив объектов
            {
                "login": "Xoll",
                "password": "zxasqw12"
            },
            {
                "login": "Ruslan",
                "password": "qwerty"
            }
        ]
        document.querySelector('.signIn').addEventListener('click', () => { //добавляем функцию в список выполянемых функций по клику
            object.forEach(element => {
                if (element.login == document.querySelector('.login_block input').value && element.password == document.querySelector('.pass_block input').value) {
                    alert('Вы успешно авторизованы');
                }
            });
        })
    });
}
