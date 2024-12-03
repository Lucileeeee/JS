import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="addingNumbers">
    <h1>AddingNumbers...</h1>
    <input type="number" name="firstNumber" id="firstNumber">
    <h2>+</h2>
    <input type="number" name="secondNumber" id="secondNumber">
    <hr>
    <button id="calculBtn">Calcul</button>
    <h2 id="result">Résultat : </h2>
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
//!partie code de jeff pour cypress
function addition(num1, num2) {
  return num1 + num2;
}

function calculate() {
  let firstNumber = parseFloat(document.getElementById('firstNumber').value);
  let secondNumber = parseFloat(document.getElementById('secondNumber').value);

  let result = addition(firstNumber, secondNumber);

  document.getElementById('result').innerText = result;
}
let btn = document.querySelector('button')
btn.addEventListener('click',calculate)
