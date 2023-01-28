function blockFor5Seconds() {
   const startTime = new Date().getTime();

   let currentTime;
   let finishTime;

   do {
    currentTime = new Date().getTime();
    finishTime = startTime + 5000;
   } while (currentTime < finishTime);
}

console.log('start');

blockFor5Seconds(5000);

console.log('hello');

console.log('end');