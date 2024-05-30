function sum () { // Argument will be given if not given and will be 
    let total = 0;
    for (let value of arguments) {
        total+= value;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));