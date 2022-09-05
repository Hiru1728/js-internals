function doSomething() {
    console.log('third');
}

console.log('first');
console.log('second');
const setTimeOut = setTimeout(() => { console.log('third') }, 6000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         console.log('response received');
//         return response.json();
//     })
//     .then(json => console.log(json))
// doSomething();
console.log('fourth');
console.log('fifth');