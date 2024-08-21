document.getElementById('login-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password ) {
        event.preventDefault();
        alert('Por Favor, preencha os campos obrigatórios, login e senha!')
    }
});

function mostrarModalCadastro() {
    document.getElementById('modalCadastro').style.display = 'block';
}

function fecharModalCadastro() {
    document.getElementById('modalCadastro').style.display = 'none';
}