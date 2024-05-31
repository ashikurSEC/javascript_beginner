function countOccurence(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error("Invalid Array");
    return array.reduce((accumulator, currentValue) => {
        const occurence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}

try {
    const numbers = [1, 3, 2, 4, 5];
    const count = countOccurence(numbers, 5);
    console.log(count);
} catch (e) {
    alert(e.message);
}
