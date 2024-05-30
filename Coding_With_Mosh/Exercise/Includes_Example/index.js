const array = ['Ashikur', 'Tamim', 'Rasel', 'Shoriful'];

function includes ( array, searchElement ) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}

const getResult = includes(array, 'Ashikur');
console.log( getResult );