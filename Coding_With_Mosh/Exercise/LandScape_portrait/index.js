

function isLandScape ( height, width ) {
    return height > width ? true : false;
}

let result = isLandScape ( 30, 20 );

console.log( result );