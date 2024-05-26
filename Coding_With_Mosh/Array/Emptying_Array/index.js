let numbers = [1, 2, 3, 4];
let another = numbers;

// Solutions 1
// numbers = [];
// console.log(another);

// Solutions 2
// numbers.length = 0;
// console.log( another );
// console.log( numbers );

// Solutions 3
// numbers.splice(0, numbers.length);
// console.log( another );
// console.log( numbers );

// Solutions 4
while (numbers.length > 0) {
  numbers.pop();
}
console.log(another);
console.log(numbers);
