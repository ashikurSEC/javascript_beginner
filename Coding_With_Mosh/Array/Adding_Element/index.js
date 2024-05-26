let number = [3, 4];

//End 
number.push(5, 6);
console.log( number );

//Start
number.unshift(1, 2);
console.log( number );

//middle 
number.splice(2, 0, 'a', 'b');
console.log( number );