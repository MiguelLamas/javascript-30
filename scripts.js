// storing countdown in own global variable
let countdown;
// timer display variable linking to html
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now(); // gives you current time stamp
  const then = now + seconds * 1000;
  displayTimeLeft(seconds); // run it once as soon as invoked, then below everytime we do the interval
  displayEndTime(then);

  // need to display every second left by creating setInterval and running it every second
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // in miliseconds so divide by 1000
    // check if we should stop timer/setInterval
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display timeLeft! everytime we do the interval
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// setInterval by default doesn't run immediately it elapses for 1 second before running
// to get around that we create another function

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time); //parseInt to turn into an actual number
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the form running
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

