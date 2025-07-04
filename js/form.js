
document.getElementById('project-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const successModal = document.getElementById('success-modal');   
  const closeBtn = document.getElementById('close-success');       

  
  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(() => {
    form.reset();                           // reset формы
    successModal.classList.remove('hidden');

    // Можно убрать fetch если не нужно отдельное письмо на почту
    fetch('send_mail.php', {
      method: 'POST',
      body: formData
    });
  })
  .catch(error => {
    console.error('Ошибка:', error);        
  });

  closeBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
  });
});

