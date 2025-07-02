document.getElementById('project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const messageBox = document.getElementById('form-message');
    const successModal = document.getElementById('success-modal');
    const closeBtn = document.getElementById('close-success');

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        messageBox.textContent = '';
        successModal.classList.remove('hidden');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        messageBox.textContent = 'Произошла ошибка при отправке формы';
        messageBox.style.color = 'red';
    });

    closeBtn.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });
});
