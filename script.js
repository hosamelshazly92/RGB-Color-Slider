//get elements
let redSlider = document.querySelector("#red-slider");
let greenSlider = document.querySelector("#green-slider");
let blueSlider = document.querySelector("#blue-slider");

let colorSample = document.querySelector("#backgroundColor");

//get colors values
//onmousemove
function getRedValue(theElement) {
    let button = document.querySelector("#red-input");
    button.value = theElement.value;
    setColors();
}

function getGreenValue(theElement) {
    let button = document.querySelector("#green-input");
    button.value = theElement.value;
    setColors();
}

function getBlueValue(theElement) {
    let button = document.querySelector("#blue-input");
    button.value = theElement.value;
    setColors();
}

//onchange
redSlider.addEventListener("change", function () {
    let button = document.querySelector("#red-input");
    let redValue = redSlider.value;
    button.value = redValue;
    setColors();
});

greenSlider.addEventListener("change", function () {
    let button = document.querySelector("#green-input");
    let greenValue = greenSlider.value;
    button.value = greenValue;
    setColors();
});

blueSlider.addEventListener("change", function () {
    let button = document.querySelector("#blue-input");
    let blueValue = blueSlider.value;
    button.value = blueValue;
    setColors();
});

//reset colors values
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetValues);

function resetValues() {
    let redInput = document.querySelector("#red-input");
    let greenInput = document.querySelector("#green-input");
    let blueInput = document.querySelector("#blue-input");

    redInput.value = 255;
    greenInput.value = 255;
    blueInput.value = 255;

    redSlider.value = 255;
    greenSlider.value = 255;
    blueSlider.value = 255;

    //decimal code
    colorSample.style.backgroundColor = `rgb(${redInput.value},${greenInput.value},${blueInput.value})`;
}

//apply color values
function setColors() {
    let redValue = redSlider.value;
    let greenValue = greenSlider.value;
    let blueValue = blueSlider.value;

    //decimal code
    colorSample.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}


//change background color on mouse move
//document.addEventListener("mousemove", runEvent);
//function runEvent(e) {
//document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
//}
