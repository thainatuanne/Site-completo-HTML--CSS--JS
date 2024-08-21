const decreaseButton = document.getElementById('decrease-font');
const increaseButton = document.getElementById('increase-font');

decreaseButton.addEventListener('click', function() {
    changeFontSize('decrease');
});

increaseButton.addEventListener('click', function() {
    changeFontSize('increase');
});

function changeFontSize(type) {
    const elements = document.querySelectorAll('*'); // Seleciona todos os elementos do DOM

    elements.forEach(element => {
        let currentFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));

        if (type === 'increase') {
            element.style.fontSize = `${currentFontSize + 2}px`;
        } else if (type === 'decrease') {
            element.style.fontSize = `${currentFontSize - 2}px`;
        }
    });
}