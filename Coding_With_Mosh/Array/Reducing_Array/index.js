const numbers = [1, -1 ,2, 3, 4];

// let sum = 0;

// for (let n of numbers) {
//     sum += n;
// }

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log( sum );