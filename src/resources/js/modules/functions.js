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

export function toggleSlider() {
  const slider = document.querySelector('.swiper--large');
  const overlay = document.querySelector('.overlay-slider');

  const images = document.querySelectorAll('.swiper--standart__img');
  images.forEach(image => {
    image.addEventListener('click', () => {
      slider.style.display = 'block'; // Показываем слайдер
      slider.style.position = 'fixed'; // Устанавливаем позицию "absolute"
      overlay.style.display = 'block'; // Проявляем оверлэй
    });
  });

  overlay.addEventListener('click', () => {
    slider.style.display = 'none'; // Скрываем слайдер
    slider.style.position = 'static'; // Устанавливаем позицию "static"
    overlay.style.display = 'none'; // Проявляем оверлэй
  });
}

toggleSlider();


// var buttons = document.querySelectorAll('.button');
// buttons.forEach(function (button) {
//   button.addEventListener('click', showConsultation);
// });

// var closeButton = document.querySelector('.consultation__close');
// closeButton.addEventListener('click', hideConsultation);



////////////////////////////////////////////////////////////////////////////////
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









/////////////////////////////////////////////////////////////////////////////////////////////////////

// Создание условий (Если поля запонены - разблокировать кнопку)

const phoneInput = document.querySelector(".phone");

const btn = document.querySelector(".consultation__button");
btn.setAttribute('disabled', true);

const check = document.querySelector(".consultation__checkbox")

const Fio = document.querySelector(".Fio")

Fio.oninput = function(){
  if (Fio.value.length < 5) {
    btn.setAttribute('disabled', true);
  } else {
    btn.removeAttribute('disabled');
  }
}

check.oninput = function(){
  if (check.checked) {
    btn.removeAttribute('disabled');
    
  } else {
    btn.setAttribute('disabled', true);
  }
}

phoneInput.oninput = function(){
  if (phoneMask.masked.isComplete) {
    btn.setAttribute('disabled', true);
  } else {
    btn.removeAttribute('disabled');
  }
}

//////////////////////////////////////////////////////////////

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

//

function checkAllConditions() {
  if (Fio.value.length >= 5 && check.checked && phoneMask.masked.isComplete) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
}

Fio.oninput = checkAllConditions;
check.oninput = checkAllConditions;
phoneInput.oninput = checkAllConditions;


// Отдельно для телефона (условие: если введена маска активировать кнопку)


// // Обработчик события для инпута
// phoneInput.addEventListener("input", phoneInputHandler);
// // Обработчик события для кнопки
// btn.addEventListener("click", btnHandler);

// // Если ввели правлильно - кнопка активна
// function phoneInputHandler() {
//   if (phoneMask.masked.isComplete) {
//     btn.classList.add("consultation__button--active");
//   } else {
//     btn.classList.remove("consultation__button--active");
//   }
// }



// // Отправляем номер телефона
// async function btnHandler(e) {
//   e.preventDefault();
//   return await fetch("send_msg.php", {
//     method: "POST",
//     body: phoneMask.unmaskedValue,
//   });
// }


// Кнопка показать еще

const openButton = document.querySelector('.portfolio__button');
const cards = Array.from(document.querySelector('.card'));

export function response1() {
  if (cards < 4) {
    openButton.add('hidden');

    cards
  }
}

