// Declarations Function... 

function myFunction () {
    console.log('Hello John!');
}

myFunction();

// Anonymous Function Expressions...

let run = function () {
    console.log('Hello World!');
};

run();

// ES6 Function 

let greet = ( names => {
    return names;
});

console.log(greet('Hello Ashikur Rahman!'));