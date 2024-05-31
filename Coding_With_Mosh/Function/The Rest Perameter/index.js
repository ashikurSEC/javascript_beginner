/*

function sum (...arg ) {
    return arg.reduce((a,b ) => a + b);
}

console.log( " The Sum is: " + sum(1, 2, 3, 4, 5) );

*/

function totalDiscount ( discount, ...prices ) {
    const total = prices.reduce((a, b) => a  + b);
    return total * (1 - discount);
}

console.log(totalDiscount( .25, 20, 30));