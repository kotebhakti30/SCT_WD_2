let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStopwatch() {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  running = false;
}

function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  running = false;
}

function recordLap() {
  if (!running) return;
  const lapTime = display.innerText;
  const lap = document.createElement("div");
  lap.className = "lap-item";
  lap.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(lap);
}

updateDisplay(); // Initialize display
