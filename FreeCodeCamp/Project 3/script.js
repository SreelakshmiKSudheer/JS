const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSeconds = "00";
let leadingMinutes = "00";
let leadingHours = "00";

let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    leadingHours = hours < 10 ? "0" + hours : hours;

    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timeInterval = setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        clearInterval(timeInterval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
});
