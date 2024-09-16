let score = 0;
let level = 1;
let tapPower = 1;
let upgradeCost = 100;

const tapButton = document.getElementById('tap-button');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const buyUpgradeButton = document.getElementById('buy-upgrade');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

// Уровни и необходимое количество монет для их достижения
const levels = [
    10000,       // Level 1
    50000,       // Level 2
    100000,      // Level 3
    250000,      // Level 4
    500000,      // Level 5
    1000000,     // Level 6
    5000000,     // Level 7
    10000000,    // Level 8
    100000000,   // Level 9
    1000000000   // Level 10
];

tapButton.addEventListener('click', () => {
    score += tapPower;
    scoreDisplay.textContent = score;
    updateLevel();
});

buyUpgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        tapPower++;
        upgradeCost = Math.floor(upgradeCost * 4.5); // Увеличиваем стоимость улучшения
        scoreDisplay.textContent = score;
        upgradeCostDisplay.textContent = upgradeCost;
    }
});

function updateLevel() {
    // Проверяем, если текущий счет позволяет подняться на следующий уровень
    if (level < levels.length && score >= levels[level]) {
        level++;
        levelDisplay.textContent = level;
    }
}
