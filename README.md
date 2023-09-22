# find-your-hat

## Description
"find-your-hat" is a terminal maze-solving game developed using Node.js. The objective of the game is to navigate through a field and find the hat while avoiding holes. If you fall into a hole or go out of bounds, the game is over.

## Prerequisites
- Node.js

## How to Play
1. Clone the repository to your local machine.
2. Navigate to the repository directory in your terminal.
3. Launch the game by running the command: `node main.js`
4. The game will display the current state of the field.
5. You will be prompted to choose a direction to move in (up, down, left, or right).
6. Navigate through the field to find the hat (`^`).
7. Avoid falling into holes (`O`).
8. Your path will be marked with an asterisk (`*`).

## Game Elements
- Hat (`^`): Your goal is to find the hat.
- Hole (`O`): Avoid these! Falling into a hole ends the game.
- Field Character (`░`): Represents unexplored parts of the field.
- Path Character (`*`): Marks your path as you navigate through the field.

## Code Overview
The game is primarily implemented in the [main.js](https://github.com/TyTe108/find-your-hat/blob/main/main.js) file. It uses a class named `Field` which has methods to print the field, move the player, generate a new field, and play the game. The game also utilizes the `prompt-sync` package for user input.

For more details, you can check out the [main.js](https://github.com/TyTe108/find-your-hat/blob/main/main.js) file.

## Dependencies
The game has a dependency on the `prompt-sync` package. You can find more details in the [package.json](https://github.com/TyTe108/find-your-hat/blob/main/package.json) file.

## Author
Tyler Te

## License
MIT

---
