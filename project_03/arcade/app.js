const snake = {
    //tail is the highest index
    body: [[10, 4], [10, 3], [10, 2]],
    head: [10, 5]
}

const gameState = {
    boardSize: {
        defaultRow: 20,
        defaultColumn: 20,
    },
    apple: [10, 10],
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
    // initGame()
});

function initGame() {
    board = gameContainer.appendChild(document.createElement('div'))
    board.setAttribute('id', 'gameBoard')
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

    // renders the initial apple
    let appleRow = gameState.apple[0]
    let appleCol = gameState.apple[1]
    cells[appleRow][appleCol].classList.add('apple')

    renderSnake();
}

// REMOVE: at the end of testing
initGame()

function renderSnake() {
    // render snake on board based on snake object
    // add class snakeShape to the body
    for (let i = 0; i < snake.body.length; i++) {
        const [row, col] = snake.body[i]; //using array destructuring 
        const cell = cells[row][col]
        cell.classList.add('snakeShape')
    }

    // render snake head
    const [snakeHeadRow, snakeHeadCol] = snake.head
    cells[snakeHeadRow][snakeHeadCol].classList.add('snakeShape')
}


function removeSnake() {
    for (let i = 0; i < snake.body.length; i++) {
        const [row, col] = snake.body[i]; //using array destructuring 
        const cell = cells[row][col]
        cell.classList.remove('snakeShape')
    }

    const [row, col] = snake.head
    const cellHead = cells[row][col]
    cellHead.classList.remove('snakeShape')
}

document.addEventListener('keydown', (event) => {
    removeSnake()
    let newHead;
    if (event.key === 'ArrowLeft') {
        //need to change existing positions of snake.body and add [x,y-1]
        // snake.head = snake.head.map(([row, col]) => [row, col - 1])
        newHead = [snake.head[0], snake.head[1] - 1]

    }
    else if (event.key === 'ArrowUp') {
        //need to change existing positions of snake.body and add [x-1,y]
        // snake.head = snake.head.map(([row, col]) => [row - 1, col])
        newHead = [snake.head[0] - 1, snake.head[1]]
    }
    else if (event.key === 'ArrowRight') {
        //need to change existing positions of snake.body and add [x,y+1]
        // snake.head = snake.head.map(([row, col]) => [row, col + 1])
        newHead = [snake.head[0], snake.head[1] + 1];
    }
    else if (event.key === 'ArrowDown') {
        //need to change existing positions of snake.body and add [x+1,y]
        // snake.head = snake.head.map(([row, col]) => [row + 1, col])
        newHead = [snake.head[0] + 1, snake.head[1]];
    }

    snake.body.unshift(snake.head)
    snake.body.pop()

    snake.head = newHead
    renderSnake()
});


// render an apple at a random position on the board
function randomPosApple() {
    //random apple position 
    let appleRow = Math.floor(Math.random() * gameState.boardSize.defaultRow)
    let appleCol = Math.floor(Math.random() * gameState.boardSize.defaultColumn)
    cells[appleRow][appleCol].classList.add('apple')
}


// Snake will grow in length when an apple is eaten
function eatAppleAndGrow() {
    // check if the snake head is on the same cell as the apple

    // if they're the same then a new head should be created
    // apple should be removed and a new apple should appear on the board
}

// Game will end if the snake hits itself or hits the wall
function endGame() {

}


