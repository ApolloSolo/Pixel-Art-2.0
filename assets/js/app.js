const mainContainer = document.querySelector(".main-container");
const gridContainer = document.querySelector(".grid-container");
const pixelForm = document.querySelector("#pixel-form");
const resetBtn = document.querySelector("#reset");
const colorPicker = document.querySelector("input[name='color']");

let pixelCounter = 0;

//handles form data, creates and adds pixels
const formHandler = function(e) {
    e.preventDefault()
    const numPixels = document.querySelector("input[name='pixel-input']").value;
    
    if(!numPixels){
        alert("You need to choose a number of pixels")
        return false;
    }

    displayPixels(numPixels);

    pixelForm.reset();
}

//Makes grid div the pixels will be in
const makePixelGrid = function(){
    const pixelGrid = document.createElement('div')
    pixelGrid.className = "pixel-grid"
    gridContainer.appendChild(pixelGrid);
}

//Makes the pixels
const makePixel = function(){
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    newPixel.setAttribute("data-pixel-id", pixelCounter);
    pixelCounter++;
    return newPixel;
}

//Calls function to make grid, makes, and adds number of pixels
const displayPixels = function (num) {
    makePixelGrid();
    const pixelGrid = document.querySelector(".pixel-grid");
    for(let i = 0; i < num; i++){
        const pixel = makePixel();
        pixelGrid.appendChild(pixel);
    }
}

const pixelClickHandler = function(e){
    if(e.target.matches(".pixel")){
        const pixelId = e.target.getAttribute('data-pixel-id');
        editColor(pixelId);
      }
}

const editColor = function(pixelId){
    const pixelSelected = document.querySelector(".pixel[data-pixel-id='" + pixelId + "']");
    let pixelColor = colorChangeHandler();
    console.log(pixelColor);
    if(pixelSelected){
        pixelSelected.style.backgroundColor = pixelColor;
    }
}

const colorChangeHandler = function() {
    let color = colorPicker.value;
    //console.log(color);
    return color
}

//Event listeners

//adds pixels when number submited
pixelForm.addEventListener('submit', (e) => {
    formHandler(e);
})

//reset pixels
resetBtn.addEventListener('click', (e) => {
    const pixelGrid = document.querySelector(".pixel-grid");
    if(pixelGrid){
        pixelGrid.remove();
        pixelCounter = 0;
    }
    else{
        alert("There are no pixels to remove");
        return false;
    }
});

//main event listener
gridContainer.addEventListener('click', (e) => {
    pixelClickHandler(e);
})

colorPicker.addEventListener('change', colorChangeHandler);