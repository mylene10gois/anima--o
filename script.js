const toggleButton = document.getElementById("toggleButton");
let isPaused = false;
let bolas = document.querySelectorAll('.bola');

toggleButton.addEventListener("click", () => {
    if (isPaused) {
        bolas.forEach(bola => bola.style.animationPlayState = 'running');
        toggleButton.textContent = 'PAUSE';
    } else {
        bolas.forEach(bola => bola.style.animationPlayState = 'paused');
        toggleButton.textContent = 'PLAY';
    }
    isPaused = !isPaused;
});

