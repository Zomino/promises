function blockFor5Seconds() {
    const startTime = new Date().getTime();

    let currentTime;
    let finishTime;

    do {
        currentTime = new Date().getTime();
        finishTime = startTime + 5000;
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