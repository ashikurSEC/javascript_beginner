// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 or 5 => FizzBuzz
// Not Divisible by 3 or 5 => (input)
// Not a Number => 'Not a number'


function fizzBuzz ( input ) {
    if ( typeof input !== 'number' ) {
        return 'Not a number';
    }else if ( input % 3 === 0 && input % 5 === 0 ) {
        return 'FizzBuzz';
    }else if ( input % 3 === 0 ) {
        return 'Fizz';
    }else if ( input % 5 === 0 ) {
        return 'Buzz';
    }
    return input;
}

let result = fizzBuzz ( 15 );
console.log( result );