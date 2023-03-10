const snake = {
    body: [[10, 5], [10, 6], [10, 7], [10, 8]],
    nextDirection: [1, 0],
}

const gameState = {
    boardSize: {
        defaultRow: 20,
        defaultColumn: 20,
    },
    apple: [11, 8],
    snake: snake,
}

// game state
const gameContainer = document.querySelector('body')
let board  
const rows = gameState.boardSize.defaultRow
const cols = gameState.boardSize.defaultColumn
const cells = []
let score = 0
let highScore = 0


// initializes a new game, when the start game button is clicked
document.getElementById('startGame').addEventListener('click', () => {
    initGame()
});

function initGame() {
    board = gameContainer.appendChild(document.createElement('div'))
    board.setAttribute('id','gameBoard')
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.cellId = i * cols + j
            board.appendChild(cell);
            row.push(cell);
        }
        cells.push(row)
    }
}

// REMOVE: at the end of testing
initGame()

function renderSnakeAndApple() {
    
}

// changes direction of the snake when an arrow key is clicked
function changeDirection(event) {

}

// render an apple at a random position on the board
function randomPosApple() {

}

// Snake will grow in length when an apple is eaten
function eatAppleAndGrow() {

}

// Game will end if the snake hits itself or hits the wall
function endGame() {

}


// REQUIREMENTS 
// start the game by pressing a Start button
// use my arrow keys to change the direction of the snake
// have the snake grow correctly when it eats the apple
// have the game end if the snake tries to eat itself
// have the game end if the snake runs into a wall
// see how long my snake was when the game ended
// start the game over without having to reset the browser



// // Constants for game board
// const BOARD_WIDTH = 10;
// const BOARD_HEIGHT = 10;

// // Variables for game state
// let snake = [];
// let apple = {};
// let direction = 'right';
// let intervalId;
// let score = 0;

