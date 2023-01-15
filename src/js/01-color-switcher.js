const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

function onStartButtonClick(e) {
  e.preventDeafault;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function onStopButtonClick(e) {
  e.preventDeafault;
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}


startButton.addEventListener('click', onStartButtonClick)
stopButton.addEventListener('click', onStopButtonClick)

