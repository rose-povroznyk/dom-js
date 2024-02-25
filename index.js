// const buttonElement = document.getElementById('btn');
// buttonElement.addEventListener('click', getAlert);

// function getAlert(event) {
//   const btn = event.target;

//   if (btn.style.backgroundColor === 'red') {
//     btn.style.backgroundColor = 'unset';
//   } else {
//     btn.style.backgroundColor = 'red';
//   }
// }

// const secondButton = document.getElementById('new-btn');
// // buttonElement.addEventListener('mouseenter', getgreeting);

// // function getgreeting() {
// //   alert('Hello my dear friend!');
// // }

// const yesBtn = document.getElementById('yes-btn');
// const noBtn = document.getElementById('no-btn');

// noBtn.addEventListener('mouseenter', gost);

// function gost(event) {
//   const btn = event.target;
//   btn.textContent = 'Yes';
//   //   btn.style.display = 'none';
//   //   console.log('hello');
//   //   event.target.removeEventListener('mouseenter', gost);
// }

// noBtn.addEventListener('mouseleave', function () {
//   //   this.style.display = 'unset';
//   this.textContent = 'No';
// });
///////////////////////////////////////////////////////////

// const form = document.getElementById('name-form');

// form.addEventListener('submit', colsoleForm);
// function colsoleForm(event) {
//   event.preventDefault();
//   //   console.log(event.target[0].value);
//   const form = event.target;
//   console.dir(form);
//   console.log(form[0].value);
// }

/////////////////////////////

// const newForm = document.getElementById('new-form');

// newForm.addEventListener('submit', consoleForm);
// function consoleForm(event) {
//   event.preventDefault();
//   //   console.log(event.target[0].value);
//   const name = event.target[0].value;
//   console.log(name);
//   alert(`Hello, dear ${name}`);
// }

///////////////
// const collection = document.getElementsByClassName('paragraph');

// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.color = 'green';
// }

// for (let p of collection) {
//   p.style.color = 'green';
// }

// const buttons = document.getElementsByTagName('button');
// btns = [...buttons];
// console.log(buttons);

// function hello(event) {
//   console.log('Hello, user!');
//   console.log(event);
//   event.target.removeEventListener('click', hello);
// }

// btns.forEach((element) => {
//   element.addEventListener('click', hello);
// });

// const firstButton = document.querySelector('button');
// console.log(firstButton);
// const secondButton = document.querySelector('.super-btn');
// const thirdButton = document.querySelector('#btnbtn');

// const allBtns = document.querySelectorAll('button');

// const one = allBtns[0];
// one.innerHTML = 'test';

////////////////////////////Конвертація валют

// const CURRENCY = {
//   USD_TO_UAH: 37.65,
//   EUR_TO_UAH: 40.61,
// };

// const converterForm = document.querySelector('#currency-converter-form');
// function convertHandler(event) {
//   event.preventDefault();
//   const amount = Number(document.querySelector('#amount').value);
//   const currency = document.querySelector('#currency').value;
//   const result = document.querySelector('#result');
//   let convertedAmount;
//   if (currency === 'USD') {
//     convertedAmount = (amount * CURRENCY.USD_TO_UAH).toFixed(2);
//   } else if (currency === 'EUR') {
//     convertedAmount = (amount * CURRENCY.EUR_TO_UAH).toFixed(2);
//   } else {
//     throw new Error('Something is going wrong');
//   }

//   result.innerHTML = `${amount} ${currency} = ${convertedAmount} UAH`;
//   result.style.color = 'red';
// }

// converterForm.addEventListener('submit', convertHandler);

// Спробуйте зробити конвертер з градусів Цельсію у Фариангейти.
// Примітка. Формула для переходу від Цельсіїв у Фарингейт:
// (температура_в_градусах_цельсія * 9/5) + 32

// 1 Цельсій = 33.8 Фаренгейта 1 Цельсій = 33.8 Фаренгейта

// const input1 = document.querySelector('#far');
// const input2 = document.querySelector('#cel');

// function fahrenheitHandler(event) {
//   input2.value = input1.value * 100;
// }

// input1.addEventListener('input', fahrenheitHandler);

///////////////////////////////////////////

// const div = document.querySelector('#box');

// const [red, green] = document.querySelectorAll('.btn');

// red.addEventListener('click', redBtnHandler);

// function redBtnHandler(event) {
//   div.style.backgroundColor = 'red';
//   // div.classList.toggle('bg-color-red');
// }

// green.addEventListener('click', greenBtnHandler);

// function greenBtnHandler(event) {
//   div.style.backgroundColor = 'green';
//   // div.classList.toggle('bg-color-green');
// }

///////////////////////////Зміна теми сайту
// const changeBtn = document.querySelector('.change');

// changeBtn.addEventListener('click', changeBtnHandler);
// function changeBtnHandler(e) {
//   document.body.classList.toggle('black-theme');
// }

// const event = new Event('click');

// const button = document.querySelector('button');
// window.addEventListener('click', buttonClickHandler);
// function buttonClickHandler(e) {
//   // console.log(e.composedPath());
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// const clickEvent = new MouseEvent('click');
// button.dispatchEvent(clickEvent);

// const button = document.querySelector('button');
// const div = document.querySelector('#root');

// function eventHandlerBody(event) {
//   console.dir('hi from body handler');
//   event.stopPropagation();
//   console.log(this);
// }

// function eventHandlerBtn(event) {
//   console.dir('hi from button handler');
// }

// button.addEventListener('click', eventHandlerBtn, { capture: true });
// div.addEventListener('click', eventHandler, { capture: true, once: true });
// document.body.addEventListener('click', eventHandlerBody, {
//   capture: true,
// });
// window.addEventListener('click', eventHandler, { capture: true, once: true });

// const btn = document.querySelector('button');

// btn.addEventListener('click', clickHandler);

// function clickHandler(e) {
//   const { target } = e;
//   console.log(target);
//   target.disabled = true;
// }

//////////////////////////////////////////
const buttons = document.querySelectorAll('button');
const div = document.querySelector('#root');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler);
// }

// for (let btn of buttons) {
//   btn.addEventListener('click', clickHandler);
// }

// function clickHandler({ target }) {
//   const {
//     dataset: { color },
//   } = target;
//   const { parentElement } = target;
//   console.log(color);
//   parentElement.style.backgroundColor = color;
// }

const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
  btn.addEventListener('click', clickHandler);
}

function clickHandler({ target }) {
  const {
    dataset: { url },
  } = target;

  document.querySelector('img').src = url;
}

function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.append('Hello world');
  document.body.append(newDiv);
  newDiv.classList.add('box');
}

document.querySelector('.div-btn').addEventListener('click', createDiv);
