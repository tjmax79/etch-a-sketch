const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

function createGrid(size) {
  container.innerHTML = ""; // Clear old grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
    //   square.style.backgroundColor = "black";
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
square.style.backgroundColor = randomColor;
    });

    container.appendChild(square);
  }
}

createGrid(16); // Default grid

resetButton.addEventListener("click", () => {
  const input = prompt("Enter squares per side (e.g., 16):");
  const size = parseInt(input);
  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});