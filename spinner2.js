let frames = ['\r|    ', '\r/    ', '\r-    ',  '\r\\    '];

const animator = function(numOfLoops) {
  let count = 0;
  while (count < numOfLoops * 4 + 1) {
    const frame = frames[0];
    setTimeout(() => {
      process.stdout.write(frame);
    }, 200 * count);
    count++;
    frames.push(frames.shift());
  }
};

animator(5);

//results of Timeoutcs

// const animator = function(numOfLoops) {
  // let count = 0;
  // const delay = 200;
  // while (count < numOfLoops * 4 + 1) {
    
    // (function () {
      // setTimeout(() =>
        // process.stdout.write(frames[0]), delay * count);
      // count++;
      // frames.push(frames.shift());
    // });
  // }
// }