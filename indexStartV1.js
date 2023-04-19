/* jshint esversion: 6 */

var isRunning = false;
var elapsedTime = 0;
var timer = null;

function init() {
	const eStart = document.getElementById("start");
	const eStop = document.getElementById("stop");
	const eReset = document.getElementById("reset");

	eStart.addEventListener("click", startTimer);
	eStop.addEventListener("click", stopTimer);
	eReset.addEventListener("click", resetTimer);
}

function startTimer() {
	if (isRunning === false) {
		isRunning = true;
		timer = setInterval(incrementTimer, 1000);
	}
}

function incrementTimer() {
	elapsedTime++;

	let minutes = parseInt(elapsedTime / 60);
	let seconds = elapsedTime % 60;

	setTimer(pad(minutes), pad(seconds));
}

function pad(number) {
	if (number < 10) number = `0${number}`;

	return number;
}

function stopTimer() {
	if (isRunning) {
		isRunning = false;
		clearInterval(timer);
	}
}

function resetTimer() {
	stopTimer();

	elapsedTime = 0;

	setTimer("00", "00");
}

function setTimer(s1, s2) {
	const eMinutes = document.getElementById("minutes");
	const eSeconds = document.getElementById("seconds");

	eMinutes.innerText = s1;
	eSeconds.innerText = s2;
}

init();