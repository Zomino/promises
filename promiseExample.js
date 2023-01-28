function getRandomBoolean() {
    const randomValue = Math.random();
    const randomBoolean = randomValue < 0.5;

    return randomBoolean;
}

function getGreetingIn5Seconds() {
    const greetingPromise = new Promise((resolve, reject) => {
        const timeoutEvent = () => {
            const randomBoolean = getRandomBoolean();

            if (!randomBoolean) reject('what?');

            resolve('hello');
        };

        setTimeout(timeoutEvent, 1000);
    });

    return greetingPromise;
}

console.log('start');

getGreetingIn5Seconds()
    .then((greeting) => console.log(greeting))
    .catch((confusedReply) => console.log(confusedReply));

console.log('end');