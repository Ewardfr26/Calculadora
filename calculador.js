// calculador.js
let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else if (value === '.' && display.value.includes('.')) {
        return; // Evita múltiples puntos decimales
    } else if (/[+\-*/]/.test(value) && /[+\-*/]/.test(display.value.slice(-1))) {
        return; // Evita operadores consecutivos
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        if (display.value === '') {
            display.value = '0';
            return;
        }
        const result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error('División por cero');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}