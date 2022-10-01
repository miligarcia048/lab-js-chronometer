class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(printTimeCallback) {
        this.intervalId = setInterval(() => {
            if (printTimeCallback) {
                printTimeCallback();
            }
            this.currentTime++;
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        return Math.floor(this.currentTime % 60);
    }

    computeTwoDigitNumber(value) {
        value = value.toString();
        if (value.length === 1) {
            value = "0" + value;
        }

        return value;
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.currentTime = 0;
    }

    split() {
        let minutes = this.computeTwoDigitNumber(this.getMinutes());
        let seconds = this.computeTwoDigitNumber(this.getSeconds());

        return `${minutes}:${seconds}`;
    }
}