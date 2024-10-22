let score = 0;
let lives = 3;
let gameInterval;
let rockets = [];
let currentLevel = 1;
let spawnSpeed = 2500;  // Starting spawn speed for very slow bombs (Level 1)
let gameRunning = false;  // A flag to track if the game is running

const destroySound = new Audio('assets/destroy.mp3');
const lifeLostSound = new Audio('assets/life-lost.mp3');
const backgroundMusic = new Audio('assets/background-music.mp3');
backgroundMusic.loop = true;
let isMuted = false;

// Function to clone and play sound to allow simultaneous overlapping
function playSound(sound) {
    if (!isMuted) {
        const newSound = sound.cloneNode();  // Clone the sound to play multiple times
        newSound.play();
    }
}

// Toggle mute/unmute for background music
function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
}

function startGame() {
    document.querySelector('.menu').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    score = 0;
    lives = 3;
    currentLevel = 1;  // Start at level 1
    spawnSpeed = 2500;  // Very slow bombs at level 1
    gameRunning = true;  // Set game running flag to true
    updateScore();
    updateLives();
    backgroundMusic.play();
    setLevel(1);  // Set the initial level

    gameInterval = setInterval(() => {
        if (gameRunning) {
            spawnRocket();
        }
    }, spawnSpeed);
}

// Check the score and increase level/speed
function checkLevel() {
    if (score >= 800 && currentLevel < 5) {
        setLevel(5);
    } else if (score >= 500 && currentLevel < 4) {
        setLevel(4);
    } else if (score >= 250 && currentLevel < 3) {
        setLevel(3);
    } else if (score >= 100 && currentLevel < 2) {
        setLevel(2);
    }
}

// Function to set the level and adjust speed
function setLevel(level) {
    currentLevel = level;
    clearInterval(gameInterval);
    switch (level) {
        case 2:
            spawnSpeed = 2000;  // Slow bombs
            break;
        case 3:
            spawnSpeed = 1500;  // Medium fast bombs
            break;
        case 4:
            spawnSpeed = 1000;  // Fast bombs
            break;
        case 5:
            spawnSpeed = 700;   // Very fast bombs
            break;
        default:
            spawnSpeed = 2500;  // Very slow bombs (Level 1)
            break;
    }
    gameInterval = setInterval(() => {
        if (gameRunning) {
            spawnRocket();
        }
    }, spawnSpeed);
}

function spawnRocket() {
    if (!gameRunning) return;  // Prevent spawning if the game is over

    const gameArea = document.getElementById('gameArea');
    const rocket = document.createElement('div');
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    rocket.classList.add('rocket');
    rocket.setAttribute('data-letter', randomChar);  // Set the random letter as a data attribute
    rocket.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    rocket.style.top = '0px'; // Start rocket at the top
    gameArea.appendChild(rocket);
    rockets.push(rocket);
    moveRocket(rocket);
}

function moveRocket(rocket) {
    let pos = 0;
    const gameArea = document.getElementById('gameArea');
    const interval = setInterval(() => {
        if (!gameRunning) {
            clearInterval(interval); // Stop moving the rocket if the game is over
            return;
        }

        if (pos >= gameArea.clientHeight) {
            clearInterval(interval);
            gameArea.removeChild(rocket);
            rockets.splice(rockets.indexOf(rocket), 1);
            loseLife();
        } else {
            pos += 2; // Speed of rocket movement
            rocket.style.top = pos + 'px';
        }
    }, 20);
}

function updateScore() {
    document.getElementById('score').textContent = score;
    checkLevel();
}

function updateLives() {
    document.getElementById('lives').textContent = lives;
    if (lives <= 0) {
        endGame();  // Call endGame when lives reach zero
    }
}

function loseLife() {
    lives--;
    playSound(lifeLostSound);
    updateLives();
}

function endGame() {
    gameRunning = false;  // Stop game from running
    document.getElementById('gameOver').style.display = 'block';  // Show game over screen
    clearInterval(gameInterval);  // Stop spawning new bombs
    backgroundMusic.pause();  // Pause background music
}

function resetGame() {
    document.querySelector('.menu').style.display = 'none';  // Hide menu on reset
    document.getElementById('gameOver').style.display = 'none';  // Hide the Game Over screen when restarting
    
    const gameArea = document.getElementById('gameArea');
    
    // Remove all active rockets
    rockets.forEach(rocket => gameArea.removeChild(rocket));
    rockets = [];

    score = 0;
    lives = 3;
    currentLevel = 1;
    spawnSpeed = 2500;
    gameRunning = false;  // Ensure the game is paused
    
    updateScore();
    updateLives();
    
    backgroundMusic.currentTime = 0;  // Restart background music from the beginning
    backgroundMusic.play();  // Play background music again
    
    setLevel(1);  // Set the game to Level 1
    gameRunning = true;  // Start running the game again
}

    
function destroyRocket(rocket, index) {
    playSound(destroySound);
    const gameArea = document.getElementById('gameArea');
    gameArea.removeChild(rocket);
    rockets.splice(index, 1);
    score += 10;
    updateScore();
}

window.addEventListener('keydown', (e) => {
    if (!gameRunning) return;  // Ignore key presses if the game is over

    const char = e.key.toUpperCase();
    const rocketIndex = rockets.findIndex(r => r.getAttribute('data-letter') === char);
    if (rocketIndex !== -1) {
        const rocket = rockets[rocketIndex];
        destroyRocket(rocket, rocketIndex);
    }
});
