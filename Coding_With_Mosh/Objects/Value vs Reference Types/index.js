let x = {value: 30};
let y = x;

x.value = 30;

console.log(x, y);

/*

let number = 10;

function increase ( number ) {
    number++;
}

increase( number );
console.log( number );

*/

let obj = {value: 10};

function increase ( obj ) {
    obj.value++;
}

increase( obj );
console.log( obj );



