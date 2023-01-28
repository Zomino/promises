function setEventFor5SecondsTime(func) {
    setTimeout(func, 5000);
}

console.log('start');

setEventFor5SecondsTime(() => console.log('hello'));

console.log('end');