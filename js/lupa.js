
const galleryImgs = Array.from(document.querySelectorAll('.img-zoom-container img'));

const modal = document.getElementById('modal-zoom');
const modalImg = document.getElementById('modal-img');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');

let currentIndex = 0; 
let zoomed = false;

galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', function() {
    currentIndex = idx;
    openModal();
  });
});

// открытия модального окна с фоткой
function openModal() {
  const img = galleryImgs[currentIndex];
  modalImg.src = img.dataset.full || img.src; 
  modalImg.style.transform = 'scale(1)';
  modal.classList.add('active');
  zoomed = false;
  modalImg.style.cursor = 'zoom-in';
}

modalClose.onclick = function() {
  modal.classList.remove('active');
};

// Клик вне картинки (так же закрывает модалку)
modal.onclick = function(e) {
  if (e.target === modal) modal.classList.remove('active');
};

// зум
modalImg.onclick = function(e) {
  zoomed = !zoomed;
  this.style.transform = zoomed ? 'scale(2)' : 'scale(1)';
  this.style.cursor = zoomed ? 'zoom-out' : 'zoom-in';
  e.stopPropagation(); // Чтобы не закрывалась модалка при клике на картинку
};

// Кнопки влево и вправо для перелистывание фото
modalPrev.onclick = function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  openModal();
};
modalNext.onclick = function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  openModal();
};

// Стрелки на клавиатуре и Esc (можно листать , закрывать фото (модалку))
document.addEventListener('keydown', function(e) {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
    openModal();
  }
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % galleryImgs.length;
    openModal();
  }
  if (e.key === 'Escape') {
    modal.classList.remove('active');
  }
});

