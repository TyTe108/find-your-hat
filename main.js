const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray, playerStartPosition) {
        this.field = fieldArray;
        this.playerRow = playerStartPosition.row; // Set player's starting row
        this.playerCol = playerStartPosition.col; // Set player's starting column
        this.gameOver = false; // Flag to track game over state
    }

  // Method to print the current state of the field
  print() {
    const printedField = this.field.map(row => row.join('')).join('\n');
    console.log(printedField);
  }

// Method to move the player in the specified direction
move(direction) {
    let newPlayerRow = this.playerRow;
    let newPlayerCol = this.playerCol;
  
    switch (direction) {
      case 'up':
        newPlayerRow--;
        break;
      case 'down':
        newPlayerRow++;
        break;
      case 'left':
        newPlayerCol--;
        break;
      case 'right':
        newPlayerCol++;
        break;
      default:
        console.log('Invalid direction.');
        return;
    }
  
    // Check if the player is out of bounds
    if (
      newPlayerRow < 0 ||
      newPlayerRow >= this.field.length ||
      newPlayerCol < 0 ||
      newPlayerCol >= this.field[0].length
    ) {
      this.gameOver = 'outOfBounds';
      return;
    }
  
    const currentCell = this.field[newPlayerRow][newPlayerCol];
  
    if (currentCell === hole) {
      this.gameOver = 'hole';
    } else if (currentCell === hat) {
      this.gameOver = 'win';
    } else {
      // Update the current cell with the player's path character
      this.field[this.playerRow][this.playerCol] = fieldCharacter;
      this.playerRow = newPlayerRow;
      this.playerCol = newPlayerCol;
      this.field[this.playerRow][this.playerCol] = pathCharacter;
    }
  }
  
  

    static generateField(height, width, holePercentage) {
        // Initialize an empty field
        const field = Array.from({ length: height }, () =>
          Array.from({ length: width }, () => fieldCharacter)
        );
      
        // Calculate the total number of holes based on percentage
        const totalHoles = Math.floor((height * width * holePercentage) / 100);
      
        // Randomly place holes in the field
        for (let i = 0; i < totalHoles; i++) {
          let randomRow, randomCol;
          do {
            randomRow = Math.floor(Math.random() * height);
            randomCol = Math.floor(Math.random() * width);
          } while (field[randomRow][randomCol] !== fieldCharacter);
          field[randomRow][randomCol] = hole;
        }
      
        // Randomly place the hat in the field
        let hatRow, hatCol;
        do {
            hatRow = Math.floor(Math.random() * height);
            hatCol = Math.floor(Math.random() * width);
        } while (field[hatRow][hatCol] !== fieldCharacter || (hatRow === 0 && hatCol === 0));
        field[hatRow][hatCol] = hat;

      
        // Randomly place the player's starting position
        let playerRow, playerCol;
        do {
          playerRow = Math.floor(Math.random() * height);
          playerCol = Math.floor(Math.random() * width);
        } while (field[playerRow][playerCol] !== fieldCharacter);
        field[playerRow][playerCol] = pathCharacter;
      
        return {
            field: field,
            playerStartPosition: { row: playerRow, col: playerCol }
        };
      }  

      play() {
        let direction;
        const validDirections = ['up', 'down', 'left', 'right'];
    
        while (!this.gameOver) {
            this.print();
    
            do {
                direction = prompt('Which way? (up, down, left, right): ');
            } while (!validDirections.includes(direction));
    
            this.move(direction);
    
            if (this.gameOver) {
                if (this.gameOver === 'win') {
                    console.log('Congratulations! You found the hat.');
                } else if (this.gameOver === 'hole') {
                    console.log('Game over! You fell into a hole.');
                } else if (this.gameOver === 'outOfBounds') {
                    console.log('Game over! You went out of bounds.');
                }
                return;
            }
        }
    }
    
    
}


const height = 5;
const width = 8;
const holePercentage = 20; // 20% of the field will have holes
const generatedData = Field.generateField(height, width, holePercentage);
const myField = new Field(generatedData.field, generatedData.playerStartPosition);

myField.play();