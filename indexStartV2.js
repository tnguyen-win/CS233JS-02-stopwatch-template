/* jshint esversion: 6 */

class StopWatch {
	constructor() {
		this.isRunning = false;
		this.elapsedTime = 0;
		this.timer = null;

		const eStart = document.getElementById("start");
		const eStop = document.getElementById("stop");
		const eReset = document.getElementById("reset");

		eStart.onclick = this.startTimer.bind(this);
		eStop.onclick = this.stopTimer.bind(this);
		eReset.onclick = this.resetTimer.bind(this);

		this.startTimer = this.startTimer.bind(this);
		this.incrementTimer = this.incrementTimer.bind(this);
		this.pad = this.pad.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.setTimer = this.setTimer.bind(this);
	}

	startTimer() {
		if (this.isRunning === false) {
			this.isRunning = true;
			this.timer = setInterval(this.incrementTimer, 1000);
		}
	}

	incrementTimer() {
		this.elapsedTime++;

		let minutes = parseInt(this.elapsedTime / 60);
		let seconds = this.elapsedTime % 60;

		this.setTimer(this.pad(minutes), this.pad(seconds));
	}

	pad(number) {
		if (number < 10) number = `0${number}`;

		return number;
	}

	stopTimer() {
		if (this.isRunning) {
			this.isRunning = false;
			clearInterval(this.timer);
		}
	}

	resetTimer() {
		this.stopTimer();

		this.elapsedTime = 0;

		this.setTimer("00", "00");
	}

	setTimer(s1, s2) {
		const eMinutes = document.getElementById("minutes");
		const eSeconds = document.getElementById("seconds");

		eMinutes.innerText = s1;
		eSeconds.innerText = s2;
	}
}

var stopWatch;

window.onload = () => { stopWatch = new StopWatch(); };