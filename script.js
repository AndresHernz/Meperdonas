const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

let scale = 1;
let button2Pos = 0;

button2.style.left = `${button2Pos}px`;

const palabras = ['Di que si', 'Por Favooor', 'Tienes que decir que si', 'Te amo', 'Perdón', 'Perdoooon'];

button2.addEventListener('click', () => {
    const indice = Math.floor(Math.random() * palabras.length);
    button2.textContent = palabras[indice];
});

    

button2.addEventListener('click', () => {
    scale += 0.5;
    button1.style.transform = `scale(${scale})`;

    // Obtener las posiciones y tamaños de los botones
    const button1Rect = button1.getBoundingClientRect();
    const button2Rect = button2.getBoundingClientRect();

    // Verificar si hay colisión
    if (isColliding(button1Rect, button2Rect)) {
        moveButton2(button1Rect, button2Rect);
    }
});

function isColliding(rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
}

function moveButton2(button1Rect, button2Rect) {
    // Desplazar el botón 2 hacia la derecha
    button2Pos += 20;
    button2.style.left = `${button2Pos}px`;

    // Evitar que el botón 2 salga del contenedor
    const containerWidth = document.querySelector('.container').clientWidth;
    const button2Width = button2.offsetWidth;

    if (button2Pos + button2Width > containerWidth) {
        button2Pos = containerWidth - button2Width;
        button2.style.left = `${button2Pos}px`;
    }
}
