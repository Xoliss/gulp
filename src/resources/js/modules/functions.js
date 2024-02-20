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

export function openSlider() {
    const slider = document.querySelector('.swiper--large');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const images = document.querySelectorAll('.swiper--standart__img');

    images.forEach(image => {
      image.addEventListener('click', () => {
        slider.style.display = 'block'; // Показываем слайдер
        document.body.appendChild(overlay); // Добавляем overlay в body
      });
    });
  
    overlay.addEventListener('click', () => {
      slider.style.display = 'none'; // Скрываем слайдер
      slider.style.position = 'static'; // Устанавливаем позицию "static"
      document.body.removeChild(overlay); // Удаляем overlay из body
    });
  }