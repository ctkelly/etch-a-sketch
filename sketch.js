//Set-up
let container = document.querySelector(".container");

let gridBtn = document.querySelectorAll("button"); //Need to change to just the one button of id "new-grid-btn"

gridBtn.forEach((button) => { //Is there a singular form of "forEach"-- seems wrong to use forEach for only one button
  button.addEventListener("click", sketch); 
});

//Add event listener for 2nd "clear" button
/*let clearBtn = document.getElementById("clear");

clearBtn.forEach((btn) => {
  btn.addEventListener("click", clearColors);
});*/


//Function for user to input the number of squares for grid sides ORIGINAL
/*function userInput() {
  let input = prompt("Choose a grid size");
  return parseInt(input);
}*/

//Function to refresh the page for the next grid.  WORKS.  USE THIS ONE?
/*function refreshPage() {
  window.location.reload();
}*/ 

//Function to clear the previous grid. WORKS, BUT DOESN'T REFRESH THE PAGE. NEW GRID WON'T APPEAR AFTER THE PROMPT.
/*function clearGrid() {
  let previousGrid = document.querySelectorAll("div");
  previousGrid.remove();
}*/ 

//Function to clear previous grid EXP 2.  NO.
/*function clearGrid() {
  let previousGrid = document.getElementsByName("cell");
  previousGrid.remove();
}*/

//Function to clear the HIGHLIGHT. EXP 3. NO.
/*function clear() {
  let previousFill = document.getElementsByClassName("highlight");
  previousFill.remove();
}*/

//EXP 4. NO.
/*function clearGrid() {
  container.cell.remove("div");
}*/

//Function to clear the grid and set all cells to white -- to use with a 2nd button called "clear". WORKS.
function clearColors() {
  let gridColors = container.querySelectorAll("div");
  gridColors.forEach(gridColor => gridColor.style.backgroundColor = "#ffffff");
} 


//Function for user to input the number of squares for grid sides with limit of 100.  WORKS!  How can I make it keep asking for new input if the user keeps putting in the wrong number?
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

//Function to fill cell with random background color on mouseover EXP.  WORKS!!!
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

//Function that combines smaller functions into big fx called sketch(), which is called with button click
function sketch() {
  
  let gridSize = userInput();

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

