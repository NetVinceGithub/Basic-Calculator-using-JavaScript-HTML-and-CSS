const display = document.getElementById("display");

function valueToDisplay (input) {
    display.value+=input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {

  if (!display.value){
    display.value = "";
  } else { 
    display.value = eval(display.value);
  }
}


const array1 = ["Hi"];

const input1 = "Hello";

array1.push(input1);


array1.forEach((array) => {
  console.log(array);
})