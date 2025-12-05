let display = document.getElementById("display");
let currentInput = "0";

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}