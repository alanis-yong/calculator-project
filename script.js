let displayElement = document.getElementById('displayValue');
displayElement.innerHTML = '0';

let displayValue = displayElement.innerHTML;

function appendNumToDisplay(num) {
  if (displayValue === '0') {
    displayValue = num; // replace initial 0
  } else {
    displayValue = displayValue.concat(num);
  }
  displayElement.innerHTML = displayValue;
  return displayValue;
}

function appendSymToDisplay(sym) {
  if (!['%', '/', '*', '+', '-', '.'].includes(displayValue.at(-1))) {
    displayValue = displayValue.concat(sym);
    displayElement.innerHTML = displayValue;
    return displayValue;
  }
}

function calculate() {
  try {
    let result = eval(displayValue);
    displayElement.innerHTML = result;
    displayValue = String(result);
  } catch {
    displayElement.innerHTML = 'Error';
    displayValue = '0';
  }
}

function clearDisplay() {
  displayValue = '0';
  displayElement.innerHTML = displayValue;
}

function remove() {
  displayValue = displayValue.slice(0, -1) || '0';
  displayElement.innerHTML = displayValue;
}
