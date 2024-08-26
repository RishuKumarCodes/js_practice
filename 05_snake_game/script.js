// Define the HTML elements --> 
const board = document.getElementById(`game-board`);
console.log(board)

// define game variables:
let snake = [{x: 10, y:10}];
// draw game map, snake and food:
function draw(){
    board.innerHTML ='';
    drawSnake();
}

// draw snake:
function drawSnake(){
    snake.forEach((segment) =>{
        
    })
}