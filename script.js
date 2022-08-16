// Default row & column dimensions
let dimensions = 16;

const gridContainer = document.getElementById('grid-container');
const slider = document.getElementById('slider');
const val = document.querySelector('.val')

slider.addEventListener('input', () => {
    dimensions = slider.value;
    val.textContent = dimensions;
    clearGrid();
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 2fr); grid-template-rows: repeat(${dimensions}, 2fr);`);
    drawGrid(dimensions);
});

function clearGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
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

drawGrid(dimensions);