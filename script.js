let x = document.getElementById("show-time");
let T1 = document.getElementById("start");
let T2 = document.getElementById("stop");

function StopWatch() {
  let duration = 0;
  let running = false;
  let startTime, endTime;

  this.start = function () {
    console.log("start");
    if (running) {
      console.log("Stopwatch is running!");
      return;
    }
    running = true;
    startTime = Date.now();
  };
  this.stop = function () {
    console.log("stop");
    if (!running) {
      console.log("Stopwatch already stopped!");
      return;
    }
    running = false;
    endTime = Date.now();
    duration = (endTime - startTime) / 1000;
    x.innerHTML = `${this.duration}`;
  };

  this.reset = function () {
    console.log("reset");
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
    x.innerHTML = `${duration}`;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    }
  });
}
x.innerHTML = StopWatch();

let sw = new StopWatch();
