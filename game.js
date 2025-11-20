// const grid= document.querySelector("#grid");
// let size = 16;
// for(let i = 0; i <size *size; i++){
//   const cell = document.createElement("div");
//   cell.classList.add("cell");

// cell.addEventListener("mouseenter", () => {
//   const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

//   grid.appendChild(cell)
// }


// create button
const btn = document.createElement("button")
btn.textContent="Click-me"
btn.style.width = "100px";
btn.style.height = "40px";
btn.style.backgroundColor = "green";
btn.style.borderRadius = "5px";
btn.style.border = "none"
btn.style.color = "white"
btn.style.display = "block"
btn.style.margin = "20px auto"
document.body.prepend(btn)

//button click behavior
 btn.addEventListener("click", () =>{
  const newSize = parseInt(prompt("how many squares per side of the grid(max 100) :"))
   
  if (isNaN(newSize)){
    alert("enter a valid number");
  }else if(newSize > 100 ){
    alert("number is too large. please enter 100 or less");
  }else if (newSize <= 0 ) {
    alert("Number must be grater than 0")
  }else{
    
    clearGrid()
        createGrid(newSize)
  }
  
 })

 
// clearing the grid CHECK
function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}


// CREATING NEW GRID
 function createGrid(size){
  const totalSize = 960;
  const cellSize = totalSize / size

for(let i = 0; i < size *size; i++){
  const cell = document.createElement("div");
  cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = "1px solid #ccc";
    cell.style.boxSizing = "border-box";
    cell.backgroundColor = "lightgray"

cell.addEventListener("mouseenter", () => {
  const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
  grid.appendChild(cell)
}

 grid.style.display = "flex";
  grid.style.flexWrap = "wrap";
  grid.style.width = `${totalSize}px`;


 }

 createGrid(16)