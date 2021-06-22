const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors[0]);
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const COLOR_SWITCHER = 500;
let timeId = null;

// клик по кнопке старт

refs.startBtn.addEventListener('click', onStartBtnClick )

function onStartBtnClick() {

    timeId = setInterval(() => {
       
        const switchColor = colors.length-1;
        const randomColor = randomIntegerFromInterval(0, switchColor);
        document.body.style.background = colors[randomColor];
        refs.startBtn.disabled = true;
       
    }, COLOR_SWITCHER);
}

// клик по кнопке стоп

refs.stopBtn.addEventListener('click', onStopBtnClick )

function onStopBtnClick() {
    clearInterval(timeId);
    refs.startBtn.disabled = false;
}
   
