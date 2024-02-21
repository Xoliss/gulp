// Здесь описываем все функции
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

// открытие и закрытие большого слайдера

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

// открытие и скрытие меню консультации

export function showConsultation() {

  var consultationContent = document.querySelector('.consultation');
  var overlay = document.querySelector('.overlay');

  consultationContent.style.display = 'block';
  
  overlay.style.display = 'block';
}

export function hideConsultation() {
  var consultationContent = document.querySelector('.consultation');
  var overlay = document.querySelector('.overlay');

  consultationContent.style.display = 'none';
  overlay.style.display = 'none';
}

var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', showConsultation);
});

var closeButton = document.querySelector('.consultation__close');
closeButton.addEventListener('click', hideConsultation);