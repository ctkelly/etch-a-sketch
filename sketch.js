//Set-up
let container = document.querySelector(".container");

let gridBtn = document.querySelector("#new-grid-btn");
gridBtn.addEventListener("click", sketch); 

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearColors);


//Function to clear the grid and set all cells to white -- to use with a 2nd button called "clear". WORKS.
function clearColors() {
  let gridColors = container.querySelectorAll(".cell");
  gridColors.forEach(gridColor => gridColor.style.backgroundColor = "#ffffff");
} 

//Function for user to input the number of squares for grid sides with limit of 100.  Improvement: make it keep asking for new input if the user keeps putting in the wrong number.
function userInput() {
  let input = prompt("Choose a grid size");
  if (input >= 101) {
    let newInput = prompt("That grid size will make your computer explode!  Choose a number less than or equal to 100!");
    return parseInt(newInput);
  } else {
    return parseInt(input);
  }
} 

//Function to calculate percent space of each cell
function calcCellSize() {
  return 100 / gridSize;
}

//Function to change color of cell on mouseover ORIGINAL
/*function highlightCell(event) {
  let cell = event.target;
  cell.classList.add("highlight");
}*/

//Function to fill cell with random background color on mouseover
function highlightCell(event) {
  let cell = event.target;
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  cell.style.backgroundColor = randomColor;
}

//Function to create a square grid of boxes
function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", highlightCell);
      container.append(cell);
    }
  }
}

//Function to remove divs from previous grid before making the new grid
function removeCells() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.remove());
} 

//Function that combines smaller functions into big fx called sketch(), which is called with button click
function sketch() {
  
  let gridSize = userInput();

  removeCells();

  function calcCellSize() {
    return 100 / gridSize;
  }

  let cellSize = calcCellSize();

  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}%)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}%)`;

  function highlightCell(event) {
    let cell = event.target;
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    cell.style.backgroundColor = randomColor;
  }

  function makeGrid(size) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", highlightCell);
        container.append(cell);
      }
    }
  }

  makeGrid(gridSize);
}

