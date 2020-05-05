const spinnerFunc = function(frame, delay) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, delay);
};

let frames = ['\r|    ', '\r/    ', '\r-    ',  '\r\\    '];

const animator = function(numOfLoops) {
  let count = 0;
  const delay = 200;
  while (count < numOfLoops * 4 + 1) {
    spinnerFunc(frames[0], delay * count);
    count++;
    frames.push(frames.shift());
  }
};

animator(5);