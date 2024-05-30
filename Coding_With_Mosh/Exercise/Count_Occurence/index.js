const array = [1, 2, 3, 4, 1];

const count = countOccurence(array, 1);

console.log( count );

function countOccurence ( array, searchElement ) {
    return array.reduce((accumulator, currentValue) =>{
        const occurence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurence;
    }, 0);
}
