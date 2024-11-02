# Alpha Attack Game

Alpha Attack is a web-based typing game where players aim to destroy falling rockets by pressing the corresponding letter keys on their keyboard. The game increases in difficulty as the player's score rises, challenging their typing speed and accuracy.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Mechanics](#game-mechanics)
- [Difficulty Levels](#difficulty-levels)
- [Audio Settings](#audio-settings)

## Features
- **Interactive Gameplay:** Players type the displayed letter on falling rockets to destroy them and score points.
- **Difficulty Levels:** The game gets progressively harder as the score increases, with rockets falling faster.
- **Audio Effects:** Includes background music, sound effects for destroying rockets, and life loss.
- **Mute/Unmute Feature:** Toggle background music on or off.
- **Game Over and Restart Options:** Restart the game upon game over.

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for game logic and interactivity

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/gk732/alpha-attack-game.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd alpha-attack-game
   ```
3. **Open `index.html` in your web browser to play the game.**

## How to Play
1. Click the "Start Game" button to begin.
2. Rockets with random letters will start falling from the top of the screen.
3. Press the corresponding letter on your keyboard to destroy a rocket and score points.
4. If a rocket reaches the bottom, you lose a life.
5. The game ends when you lose all three lives. You can restart the game by clicking the "Restart Game" button on the Game Over screen.

## Game Mechanics
- **Score:** Increases by 10 points for every correctly typed letter.
- **Lives:** Start with 3 lives; lose a life whenever a rocket reaches the bottom.
- **Levels:** The game adjusts the speed of falling rockets based on the score:
  - Level 1: Very slow rockets (0-99 points).
  - Level 2: Slow rockets (100-249 points).
  - Level 3: Medium-speed rockets (250-499 points).
  - Level 4: Fast rockets (500-799 points).
  - Level 5: Very fast rockets (800+ points).

## Difficulty Levels
As the score increases, the level changes:
- **Level 1 (0-99 points):** Rockets fall very slowly.
- **Level 2 (100-249 points):** Rockets fall at a moderate speed.
- **Level 3 (250-499 points):** Rockets fall faster.
- **Level 4 (500-799 points):** Rockets fall quickly.
- **Level 5 (800+ points):** Rockets fall very quickly.

## Audio Settings
- **Sound Effects:** Background music and sound effects for rocket destruction and life loss are included.
- **Mute/Unmute:** Use the "Mute/Unmute Music" button at the top-right corner to toggle background music on or off.

---
