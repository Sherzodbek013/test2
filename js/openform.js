
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-form-btn');
  const formSection = document.getElementById('popup-form-section');
  const closeBtn = document.getElementById('close-form-btn');

  if (openBtn && formSection) {
    openBtn.addEventListener('click', function() {
      formSection.classList.remove('hidden');
      openBtn.classList.add('hidden');
      document.body.style.overflow = 'hidden';
      formSection.scrollIntoView({behavior: "smooth"});
    });
  }

  if (closeBtn && formSection && openBtn) {
    closeBtn.addEventListener('click', function() {
      formSection.classList.add('hidden');
      openBtn.classList.remove('hidden');
      document.body.style.overflow = '';
    });
  }
});
