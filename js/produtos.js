document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.meuBotao');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const productName = botao.getAttribute('data-product-name');
            const productPrice = botao.getAttribute('data-product-price');
            const tamanhoSelect = botao.previousElementSibling.querySelector('.tamanho');
            const productSize = tamanhoSelect.value;

            if (!productSize) {
                alert('Por favor, selecione um tamanho.');
                return;
            }

            const cartItem = {
                name: productName,
                price: productPrice,
                size: productSize
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            window.location.href = 'carrinho.html';
        });

        botao.addEventListener('mouseenter', () => {
            botao.classList.add('mudarCor');
        });

        botao.addEventListener('mouseleave', () => {
            botao.classList.remove('mudarCor');
        });
    });
});