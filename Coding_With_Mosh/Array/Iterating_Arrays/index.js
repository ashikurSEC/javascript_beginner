const numbers = [1, 2, 3];

console.log('Solutions 1');
for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
}


console.log('Solutions 2');
for (let number in numbers) {
    console.log( number );
}

console.log('Solutions 3');
numbers.forEach(function(number) {
    console.log(number);
});

console.log('Solutons 4');
numbers.forEach(number => console.log(number));


console.log('Solutons 5');
numbers.forEach((number, index) => console.log(index, number));