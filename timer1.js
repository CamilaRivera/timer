const timer = process.argv.slice(2);

const alarm = function(soundType) {
  process.stdout.write(soundType);
};

timer.forEach((timerInput) => {
  if (Number(timerInput) && timerInput >= 0) {
    setTimeout(() => {
      alarm('\x07');
    }, timerInput * 1000);
  }
});
