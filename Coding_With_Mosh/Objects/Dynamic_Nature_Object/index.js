const circle = {
    radius: 1
}

circle.color = "Green";
circle.john = function () {
    console.log('Hello World!');
}


delete circle.color;
delete circle.john;

console.log( circle );