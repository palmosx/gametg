let score = 0;

const tapButton = document.getElementById('tap-button');
const scoreDisplay = document.getElementById('score');

tapButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});
