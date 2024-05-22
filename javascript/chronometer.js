class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds === 1000) {
        this.currentTime++;
        this.milliseconds = 0;
      }
      if (callback) {
        callback();
      }
    }, 1); 
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 60) + (this.milliseconds / 1000));
  }

  getMilliseconds() {
    
    return this.milliseconds ;
 }


  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}.${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
