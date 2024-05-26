const circle = {
    radius: 1,
    john () {
        console.log('Hello John!');
    }
}

// const another = {};
// for ( let key in circle ) {
//     another[key] = circle[key];
// }
// console.log( another );

// const another  = Object.assign({
//     color: 'Yellow'
// }, circle);

const another = {...circle};

console.log( another );