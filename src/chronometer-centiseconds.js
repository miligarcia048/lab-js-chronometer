class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
        this.hours = 0;
    }

    start(printTimeCallback) {
        this.intervalId = setInterval(() => {
            if (printTimeCallback) {
                printTimeCallback();
            }

            this.currentTime++;
        }, 10);
    }

    getMinutes() {
        let minutes = Math.floor(this.currentTime / 6000);

        return minutes;
    }

    getSeconds() {
        return Math.floor(this.currentTime % 6000);
    }

    getCentiseconds() {
        if (currentTime === 0) {
            return 0;
        } else return Math.floor(this.currentTime % 600);
        // ... your code goes here
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.currentTime = 0;
    }

    split() {
        // ... your code goes here
    }
}