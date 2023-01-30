function blockFor5Seconds() {
   const startTime = new Date().getTime();
   const finishTime = startTime + 5000;

   let currentTime;

   do {
      currentTime = new Date().getTime();
   } while (currentTime < finishTime);
}

console.log('start');

blockFor5Seconds();

console.log('hello');

console.log('end');
