function getRandomBoolean() {
    const randomValue = Math.random();
    const randomBoolean = randomValue < 0.5;

    return randomBoolean;
}

function getGreetingIn5Seconds() {
    const greetingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTrue = getRandomBoolean();

            if (isTrue) resolve('hello');

            reject('what?');
        }, 5000);
    });

    return greetingPromise;
}

async function greet() {
    console.log('start');

    try {
        const greeting = await getGreetingIn5Seconds();

        console.log(greeting);
    } catch (confusedReply) {
        console.log(confusedReply);
    }

    console.log('end');
}

greet();