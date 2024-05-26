const numbers = [1, 2, -1, 3, 4];

const allPositives = numbers.every(function ( value ){ //? All postive number true... OtherWise false return 
    return value > 0;
});

const atLeastOnePostitive = numbers.some(value => value > 0); //!  At Least One Number Positive return true... 

console.log( atLeastOnePostitive );

console.log( allPositives );