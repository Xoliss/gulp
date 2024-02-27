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
  const body = document.querySelector('body');
  var close = document.querySelector('.swiper--large__close')

  const images = document.querySelectorAll('.swiper--standart__img');
  images.forEach(image => {
    image.addEventListener('click', () => {
      slider.style.display = 'block'; // Показываем слайдер
      slider.style.position = 'fixed'; // Устанавливаем позицию "absolute"
      overlay.style.display = 'block'; // Проявляем оверлэй
      body.style.overflowY = 'hidden';
    });
  });

  overlay.addEventListener('click', () => {
    slider.style.display = 'none'; // Скрываем слайдер
    slider.style.position = 'static'; // Устанавливаем позицию "static"
    overlay.style.display = 'none'; // Проявляем оверлэй
    body.style.overflowY = 'visible';

  });

  close.addEventListener('click', () => {
    slider.style.display = 'none'; // Скрываем слайдер
    slider.style.position = 'static'; // Устанавливаем позицию "static"
    overlay.style.display = 'none'; // Проявляем оверлэй
    body.style.overflowY = 'visible';

  })
}



//////////

// var buttons = document.querySelectorAll('.button');
// buttons.forEach(function (button) {
//   button.addEventListener('click', showConsultation);
// });

// var closeButton = document.querySelector('.consultation__close');
// closeButton.addEventListener('click', hideConsultation);



////////////////////////////////////////////////////////////////////////////////

// открытие и скрытие меню консультации

export function showConsultation() {
  var body = document.querySelector('body');
  var consultationContent = document.querySelector('.consultation');
  var overlay = document.querySelector('.consultation__overlay');
  consultationContent.style.display = 'block';
  overlay.style.display = 'block';
  body.style.overflowY = 'hidden';
}

export function hideConsultation() {
  var body = document.querySelector('body');
  var consultationContent = document.querySelector('.consultation');
  var overlay = document.querySelector('.consultation__overlay');

  consultationContent.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflowY = 'visible';
}

var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', showConsultation);

});

var closeButton = document.querySelector('.consultation__close');
closeButton.addEventListener('click', hideConsultation);

var overlay = document.querySelector('.consultation__overlay');
overlay.addEventListener('click', hideConsultation);


toggleSlider();


// export function ClearForm () {

// const cleaderButton = document.querySelector('.consultation__button');
// const fio2 = document.querySelector('.fio');
// const phone2 = document.querySelector('phone');

// cleaderButton.Cleader('click', () => {
//   slider.style.display = 'none'; // Скрываем слайдер
//   slider.style.position = 'static'; // Устанавливаем позицию "static"
//   overlay.style.display = 'none'; // Проявляем оверлэй
//   body.style.overflowY = 'visible';

// });
// }
// ClearForm ();









/////////////////////////////////////////////////////////////////////////////////////////////////////

// Создание условий (Если поля запонены - разблокировать кнопку)

const phoneInput = document.querySelector(".phone");

const btn = document.querySelector(".consultation__button");
btn.setAttribute('disabled', true);

const check = document.querySelector(".consultation__checkbox")

const fio = document.querySelector(".fio")

fio.oninput = function(){
  if (fio.value.length < 5) {
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
  if (fio.value.length >= 5 && check.checked && phoneMask.masked.isComplete) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
}

fio.oninput = checkAllConditions;
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

// const openButton = document.querySelector('.portfolio__button');
// const cards = Array.from(document.querySelector('.card'));

// export function response1() {
//   if (cards < 4) {
//     openButton.add('hidden');

//     cards
//   }
// }

const showMore = document.querySelector('.portfolio__button')

const productsLenght = document.querySelectorAll('.card').length; // сколько их всего

let items = 3; //начальные карточки

showMore.addEventListener('click', () => {
  items += 1;
  const array = Array.from(document.querySelector('.portfolio__cards').children);
  const VisItems = array.slice(0, items);

  VisItems.forEach(el => el.classList.add('is-visible'));

  if (VisItems.length === productsLenght) {
    showMore.style.display = 'none';
  }
  
})



