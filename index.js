//Calculator

const calculatorDisplay = document.querySelector('.calculator-display');
const inputBtn = document.querySelectorAll('button');
const deleteBtn = document.getElementById('delete-button')
const resetBtn = document.getElementById('reset-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false
calculatorDisplay.textContent = '0'

function sendNumberValue(value) {
    if(awaitingNextValue) {
        calculatorDisplay.textContent = value;
        awaitingNextValue = false
    } else {
        const displayValue = calculatorDisplay.textContent
        calculatorDisplay.textContent = displayValue === '0' ? value : displayValue + value
    }
}

const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (firstNumber, secondNumber) => secondNumber,
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent)
   if(operatorValue && awaitingNextValue) {
    operatorValue = operator
    return;
}
if(!firstValue) {
    firstValue = currentValue
}
else {
    const calculation = calculate[operatorValue](firstValue, currentValue)
    calculatorDisplay.textContent = calculation
    firstValue = calculation
   }
   awaitingNextValue = true;
   operatorValue = operator
} 

function useDecimal() {
    if(awaitingNextValue) return;
    if(calculatorDisplay.textContent.includes('.')) {
        return
    } else {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

function resetAll() {
    calculatorDisplay.textContent = '0'
    firstValue = 0
    operatorValue = 0
    awaitingNextValue = false
}

function deleteNumber() {
    if(calculatorDisplay.textContent === '0') return;
    if(!awaitingNextValue) {
       calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1) 
    }
}

inputBtn.forEach(button => {
    if(!button.className) {
     button.addEventListener('click',  () => sendNumberValue(button.value))  
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => useOperator(button.value))  
    } else if(button.classList.contains('decimal')) {
        button.addEventListener('click', () => useDecimal()) 
    }
})

deleteBtn.addEventListener('click', deleteNumber)
resetBtn.addEventListener('click',resetAll)

// Theme 

const theme = document.body;
const themeCircle1 = document.getElementById('theme-circle-1');
const themeCircle2 = document.getElementById('theme-circle-2');
const themeCircle3 = document.getElementById('theme-circle-3');

function toggleTheme() {
    themeCircle1.style.opacity = '1'
    themeCircle2.style.opacity = '0'
    themeCircle3.style.opacity = '0'

    theme.setAttribute('id', 'theme-1')
}

function toggleTheme2() {
    themeCircle1.style.opacity = '0'
    themeCircle2.style.opacity = '1'
    themeCircle3.style.opacity = '0'

    theme.setAttribute('id', 'theme-2')
}

function toggleTheme3() {
    themeCircle1.style.opacity = '0'
    themeCircle2.style.opacity = '0'
    themeCircle3.style.opacity = '1'

    theme.setAttribute('id', 'theme-3')
}

themeCircle1.addEventListener('click', toggleTheme)
themeCircle2.addEventListener('click', toggleTheme2)
themeCircle3.addEventListener('click', toggleTheme3)