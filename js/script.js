const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
document.addEventListener('DOMContentLoaded', () => {
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
});
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
animateCounter('counter1', 120000, 500);
animateCounter('counter2', 40058, 500);
animateCounter('counter3', 15000, 500);
document.querySelectorAll('.mobile-submenu > a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
  });
});

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

