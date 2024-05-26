// Falsy
// Undefind
// null
// ''
// false 
// 0 
// NaN


function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) {  // Check if the current value is truthy
            count++;
        }
    }
    return count;
}

const array = [null, undefined ,0, '', 1, 2, 3];
let count = countTruthy(array);
console.log(count);  
