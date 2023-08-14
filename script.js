
// Run default functions on page load
window.onload = () => {
    createGrid(16);
    changeColor();
    resize();
    randomizeColor();
} 


function resize() {
    const sizeButton = document.querySelector("button.resize");
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
            changeColor();
        }
    });
}


function createGrid(size) {
    const container = document.querySelector("div.grid-container");

    for (let i = 0; i < size*size; i++) {
        const grid = document.createElement("div");    
        grid.classList.add("grid");
        grid.style.height = 100 / size + "%";
        grid.style.width = 100 / size + "%";

        container.appendChild(grid);
    }
}


function removeGrid() {
    grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.remove();
    });
}


// Change color (randomized) with helper function below
function randomizeColor() {
    // Add listener to button
    const randomColor = document.querySelector("button.random-color");
    randomColor.addEventListener("click", () => {
        const grids = document.querySelectorAll(".grid");
        grids.forEach((grid) => {
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "rgb(" + getRandomRGB() + ", " + getRandomRGB() + ", " + getRandomRGB() + ")";
            });
        });
    });
}


function getRandomRGB() {
    return Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
}


// Change color (monotone)
function changeColor(color="black") {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = color;
        });
    });
}


// Reserved function. Remove all listeners on grid (by replacing with its clone)
function removeListener() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.replaceWith(grid.cloneNode(true));
    });
}