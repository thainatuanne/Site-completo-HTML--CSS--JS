document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Tamanho: ${item.size} - Preço: R$ ${item.price}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {

            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            li.remove();
        });

        li.appendChild(deleteButton);
        cartItemsContainer.appendChild(li);
    });

    const paymentForm = document.getElementById('payment-form');
    const errorMessage = document.getElementById('mensagem');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        errorMessage.textContent = '';

        const nome = document.getElementById('nome').value.trim();
        const numeroCartao = document.getElementById('numero-cartao').value.trim();
        const validade = document.getElementById('validade').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (nome === '' || numeroCartao === '' || validade === '' || cvv === '') {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
        }

        if (!isCardValid(numeroCartao)) {
            errorMessage.textContent = 'Número do cartão inválido.';
            return; 
        }

        alert('Compra efetuada com sucesso!');

        localStorage.removeItem('cart');
        cartItemsContainer.innerHTML = '';
    });

    function isCardValid(cardNumber) {

        const regex = /^[0-9]{16}$/;
        return regex.test(cardNumber);
    }
});