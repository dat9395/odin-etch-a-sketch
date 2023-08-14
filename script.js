
// Creat a default 16 x 16 grid on page load 
window.onload = createGrid(16);

const sizeButton = document.querySelector("button.size");
sizeButton.addEventListener("click", () => {
    let size = prompt("Input N between 1 and 100 for generating N x N grid");
    
    // Keep prompting again if user hit OK with invalid value
    while ((size > 100 || size < 1 || isNaN(size)) && size != null) {
        size = prompt("Invalid value! Input N between 1 and 100 for generating N x N grid");
    }

    // Create new grid, do nothing if user hit Cancel or reload page
    if (size != null) {
        removeGrid();
        createGrid(size);
    }
})


function createGrid(size) {
    const container = document.querySelector("div.grid-container");

    for (let i = 0; i < size*size; i++) {
        const grid = document.createElement("div");    
        grid.classList.add("grid");
        grid.style.height = 100 / size + "%";
        grid.style.width = 100 / size + "%";
        changeColor(grid);

        container.appendChild(grid);
    }
}


function changeColor(grid) {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
    })
}


function removeGrid() {
    grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.remove();
    })
}