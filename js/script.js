// Отвечает за появление анимации карточек при прокрутке
const observer = new IntersectionObserver((entries) => { 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

// Запускаю наблюдение за каждой карточкой
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
  // (меняет активную ссылку в меню)
  const path = window.location.pathname.toLowerCase();
  const currentLang = path.startsWith('/en/') ? 'en' : 'ru';
  const langLinks = document.querySelectorAll('.lang a');

  langLinks.forEach(link => {
    if (link.dataset.lang === currentLang) {
      link.classList.add('active');
      link.style.pointerEvents = 'none';
    } else {
      link.classList.remove('active');
      link.style.pointerEvents = 'auto';
    }
  });

  // Массив проектов, указываю папку и список фоток для каждой карточки
  const projects = [
    {
      folder: '/img/Портфолио/Белозерск Этнография',
      files: [
        'фото 1.jpg', 'фото 2.jpg', 'фото 3.jpg', 'фото 4.jpg', 'фото 5.jpg',
        'фото 6.jpg', 'фото 7.jpg', 'фото 8.jpg', 'фото 9.jpg', 'фото 10.jpg',
        'фото 11.jpg', 'фото 12.jpg', 'фото 13.jpg', 'фото 14.jpg', 'фото 15.jpg',
        'фото 16.jpg', 'фото 17.jpg', 'фото 18.jpg', 'фото 19.jpg'
      ]
    },
    {
      folder: '/img/Портфолио/Белозерск Музей Орлова',
      files: [
        'фото 1.jpg', 'фото 2.jpg', 'фото 3.jpg', 'фото 4.jpg',
        'фото 5.jpg', 'фото 6.jpg', 'фото 7.jpg'
      ]
    },
    // (папка + список фоток)
  ];

  // Прохожусь по каждой карточке, для каждой выбираю рандом фото из нужной папки
  document.querySelectorAll('.card-grid .card').forEach((card, idx) => {
    const cardImg = card.querySelector('.card-image');

    if (projects[idx] && cardImg) {
      const { folder, files } = projects[idx];
      const rnd = Math.floor(Math.random() * files.length); // беру случайное фото
      // Обязательно заменяю пробелы на %20, чтобы картинки грузились в браузере!
      const imgPath = `${folder}/${files[rnd]}`.replace(/ /g, '%20');
      cardImg.style.backgroundImage = `url('${imgPath}')`;
    }
  });
});

// Счётчики 
function createCounter(containerId, digitsCount = 5) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < digitsCount; i++) {
    const span = document.createElement('span');
    span.classList.add('digit');
    container.appendChild(span);
  }
}

function updateCounter(containerId, numberStr) {
  const container = document.getElementById(containerId);
  const digits = container.querySelectorAll('.digit');

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const newChar = numberStr[i] || ' ';
    if (digit.textContent !== newChar) {
      digit.classList.add('spin');
      setTimeout(() => {
        digit.textContent = newChar;
        digit.classList.remove('spin');
        digit.classList.add('visible');
      }, 250);
    }
  }
}

// Анимация увеличения чисел 
function animateCounter(containerId, target, duration) {
  const digitsCount = target.toString().length;
  createCounter(containerId, digitsCount);

  const steps = 240; 
  const stepTime = duration / steps;
  let currentStep = 0;

  function step() {
    currentStep++;
    const progress = currentStep / steps;
    const currentNumber = Math.floor(progress * target);
    const numberStr = currentNumber.toString().padStart(digitsCount, '0');
    updateCounter(containerId, numberStr);

    if (currentStep < steps) {
      setTimeout(step, stepTime);
    } else {
      updateCounter(containerId, target.toString().padStart(digitsCount, '0'));
    }
  }

  step();
}

// Запускаю анимацию для всех трёх счётчиков 
animateCounter('counter1', 120000, 500);
animateCounter('counter2', 40058, 500);
animateCounter('counter3', 15000, 500);
// ... можно сюда добавить еще

// Бургер
document.querySelectorAll('.mobile-submenu > a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
  });
});

//функции для работы с куками установка и получение значений
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}
function getCookie(name){
  const cookies = 
  document.cookie.split(";");
  for(let cookie of cookies){ 
    const[cookieName,cookieValue] = cookie.trim().split('=');
    if(cookieName===name){
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
