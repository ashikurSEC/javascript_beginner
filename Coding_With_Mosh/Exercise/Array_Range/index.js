


function arrayRange (min, max) {
    const output = [];
    for (let i = min; i <= max; i++){
        output.push(i);
    }
    return output;
}

const numbers = arrayRange(-10, -4);
console.log( numbers );


//? Reduce Using Max& Min Number...

const array = [9, 2, 4, 6, 4, 3, 1, 8, 7, 10];


const {max, min} = array.reduce((accumulator, currentValu) =>{
    return {
        max:Math.max(accumulator.max, currentValu),
        min:Math.min(accumulator.min, currentValu)
    }
},{max: -Infinity, min: Infinity});

console.log(`Maximum value is: ${max}`);
console.log(`Minimum value is: ${min}`);

//* Another Way... 

const number = [1, 5, 3, 4, 2];

let maxValue = -Infinity;
let minValue = Infinity;

for (let i = 0; i <= number.length; i++) {
    if (number[i] > maxValue) {
        maxValue = number[i];
    }

    if (number[i] < minValue) {
        minValue = number[i];
    }
}

console.log(`Maximum value is: ${maxValue}`);
console.log(`Minimum value is: ${minValue}`);