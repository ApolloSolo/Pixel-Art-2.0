const mainContainer = document.querySelector(".main-container");
const gridContainer = document.querySelector(".grid-container");
const pixleForm = document.querySelector("#pixle-form");
const resetBtn = document.querySelector("#reset");

let pixleCounter = 0;

//handles form data, creates and adds pixles
const formHandler = function(e) {
    e.preventDefault()
    const numPixles = document.querySelector("input[name='pixle-input']").value;
    
    if(!numPixles){
        alert("You need to choose a number of pixles")
        return false;
    }

    displayPixles(numPixles);

    pixleForm.reset();
}

//Makes grid div the pixles will be in
const makePixleGrid = function(){
    const pixleGrid = document.createElement('div')
    pixleGrid.className = "pixle-grid"
    gridContainer.appendChild(pixleGrid);
}

//Makes the pixles
const makePixle = function(){
    const newPixle = document.createElement('div');
    newPixle.className = 'pixle';
    newPixle.setAttribute("data-pixle-id", pixleCounter);
    pixleCounter++;
    return newPixle;
}

//Calls function to make grid, makes, and adds number of pixles
const displayPixles = function (num) {
    makePixleGrid();
    const pixleGrid = document.querySelector(".pixle-grid");
    for(let i = 0; i < num; i++){
        const pixle = makePixle();
        pixleGrid.appendChild(pixle);
    }
}

//Event listeners

//adds pixles when number submited
pixleForm.addEventListener('submit', (e) => {
    formHandler(e);
})

//reset pixles
resetBtn.addEventListener('click', (e) => {
    const pixleGrid = document.querySelector(".pixle-grid");
    if(pixleGrid){
        pixleGrid.remove();
    }
    else{
        alert("There are no pixles to remove");
        return false;
    }
})