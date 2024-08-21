function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cpf = document.getElementById('cpf').value;

    if (name === '' || email === '' || phone === '' || address === '' || cpf === '') {
        alert('Port favor, preecnha todos os campos obrigatórios.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.'
        return false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        document.getElementById('cpfError').textContent = 'Cpf inválido';
        return false;
    }

    return true;
}



var submitButton = document.getElementById('submitt');

submitButton.addEventListener('mouseenter', function() {
    submitButton.classList.add('hover');
});

submitButton.addEventListener('mouseleave', function() {
    submitButton.classList.remove('hover');
});
