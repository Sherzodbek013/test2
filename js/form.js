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
        form.reset();
        successModal.classList.remove('hidden');
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    closeBtn.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });
});
