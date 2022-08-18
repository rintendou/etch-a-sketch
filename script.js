// Default row & column dimensions
let dimensions = 16;

const gridContainer = document.getElementById('grid-container');
const slider = document.getElementById('slider');
const val = document.querySelector('.val');
const clear = document.querySelector('.clear');

function clearGrid() {
    const cells = gridContainer.children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}

function resetGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function drawGrid(dimen) {
    for (let i = 0; i < (dimen * dimen); i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(cell).className = "cell";
    }
}

slider.addEventListener('input', () => {
    dimensions = slider.value;
    val.textContent = dimensions;
    resetGrid();
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 2fr); grid-template-rows: repeat(${dimensions}, 2fr);`);
    drawGrid(dimensions);
});

clear.addEventListener('click', () => {
    clearGrid();
});

drawGrid(dimensions);