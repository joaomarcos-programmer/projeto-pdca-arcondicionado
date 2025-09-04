const form = document.getElementById('feedback-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Feedback enviado com sucesso! Agradecemos sua colaboração.');
    form.reset();

     const formData = new FormData(form);
     fetch(form.action, {
         method: 'POST',
         body: formData,
         headers: {
             'Accept': 'application/json'
         }
     }).then(response => {
         if (response.ok) {
             alert('Feedback enviado com sucesso!');
             form.reset();
         } else {
             alert('Ocorreu um erro ao enviar o feedback.');
         }
     }).catch(error => {
         console.error('Erro:', error);
         alert('Ocorreu um erro ao enviar o feedback.');
     });
});
