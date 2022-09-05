console.log('first');
console.log('second');
// setTimeout(() => {
//     console.log('third');
// })
let seconds = 0;
const setIntervalOut = setInterval(() => {
    // console.log(seconds++); output=9;
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(setIntervalOut);
    }
}, 500)
console.log('four');
console.log('fifth');