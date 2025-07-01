document.getElementById('project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
        form.reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке формы');
    });
});