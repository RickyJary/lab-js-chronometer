class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++;      
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value.length<2) {
      return "0" + value.toString;
    }
    return value;
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
