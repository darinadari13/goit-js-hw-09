import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const defaultDate = new Date();
const button = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

let selectedDate;

function onButtonClick() {
  initTimer()
}

function initTimer() {
  button.disabled = true;

  setTimerText()

  const intervalId = setInterval(() => {
    if (new Date() >= selectedDate) {
      clearInterval(intervalId);
    } else {
      setTimerText();
    }
  }, 1000);



}

function setTimerText() {
  const ms = selectedDate - new Date()
  const timerData = convertMs(ms)

  daysSpan.innerText = addLeadingZero(timerData.days.toString());
  hoursSpan.innerText = addLeadingZero(timerData.hours.toString());
  minutesSpan.innerText = addLeadingZero(timerData.minutes.toString());
  secondsSpan.innerText = addLeadingZero(timerData.seconds.toString());
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, 0);
}

button.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= defaultDate) {
      alert("Please choose a date in the future");
      button.disabled = true;
    } else {
      button.disabled = false;
      selectedDate = selectedDates[0];
    }
    // console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

button.addEventListener('click', onButtonClick);