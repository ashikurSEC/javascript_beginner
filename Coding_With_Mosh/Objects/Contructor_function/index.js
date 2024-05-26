

function Circle ( radius ) {
    this.radius = radius;
    this.john   = function () {
        console.log('Hello John!');
    }
}

const circle = new Circle ( 1 );

circle.john();
console.log(circle.radius);
