let result = document.getElementById('result');

function checkInput(event) {
  let key = event.keyCode || event.charCode;

  if ((key < 48 || key > 57) && (key !== 46 && key !== 43 && key !== 45 && key !== 42 && key !== 47 && key !== 37)) {
    alert("Only numbers are allowed");
    event.preventDefault();
  }
}

document.addEventListener("keydown", checkInput);

function add(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid expression");
  }
}

