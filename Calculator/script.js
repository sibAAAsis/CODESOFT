let display = document.getElementById('display');
let calculation = '';

function appendCharacter(char) {
  calculation += char;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = '';
}

function deleteLastChar() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

function calculateResult() {
  try {
    const result = eval(calculation);
    display.value = result;
    calculation = result.toString();
  } catch (error) {
    display.value = 'Error';
    calculation = '';
  }
}
