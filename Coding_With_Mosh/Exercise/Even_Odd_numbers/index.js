// Check Divisible = 0 => 'Even'
// Otherwise => 'Odd';

function checkNumber ( number ) {
    for ( let i = 0; i <= number; i++ ) {
        const result = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, result);
    }
}

checkNumber ( 10 );