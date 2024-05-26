

const Circle = new Function('radius', `
this.radius = radius;
this.john   = function () {
    console.log('Hello John');
}
`);

const circle1 = new Circle(1);
console.log( circle1 );



