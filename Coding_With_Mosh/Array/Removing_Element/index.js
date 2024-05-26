let numbers = [1, 2, 3, 4];

// End 
const last = numbers.pop();
console.log( numbers );
console.log( last );

// First
const first = numbers.shift();
console.log( numbers );
console.log( first );


// Middle 

const middle = numbers.splice(3, 1);
console.log( numbers );
console.log( middle );