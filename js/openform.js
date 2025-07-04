// блок с формой и кнопку закрытие
const openBtn = document.getElementById('open-form-btn');
const formSection = document.getElementById('popup-form-section');
const closeBtn = document.getElementById('close-form-btn');

if (openBtn && formSection) {
  openBtn.addEventListener('click', function() {
    formSection.classList.remove('form-popup-hidden');
    openBtn.classList.add('form-popup-hidden');
    document.body.style.overflow = 'hidden'; // Блок скролл страницы
    formSection.scrollIntoView({behavior: "smooth"});
  });
}

// Клик по кнопке закрыть убирает форму и возвращает прокрутку
if (closeBtn && formSection && openBtn) {
  closeBtn.addEventListener('click', function() {
    formSection.classList.add('form-popup-hidden');
    openBtn.classList.remove('form-popup-hidden');
    document.body.style.overflow = '';
  });
}

