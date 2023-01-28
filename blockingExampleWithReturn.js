function blockFor5Seconds() {
    const startTime = new Date().getTime();
    const finishTime = startTime + 5000;

    let currentTime;

    do {
       currentTime = new Date().getTime();
    } while (currentTime < finishTime);
 }

function getGreetingIn5Seconds() {
    blockFor5Seconds();

    return 'hello';
}

console.log('start');

const greeting = getGreetingIn5Seconds();

console.log(greeting);

console.log('end');