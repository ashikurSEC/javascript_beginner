//? 1st Step... 

function interest ( principle, rate, years ) {
    return principle * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

//* 2nd Step... 

function interest ( principle, rate, years ) {
    rate  = rate  || 3.5;
    years = years || 5;
    return principle * rate / 100 * years;
}

console.log(interest(10000));

//~ 3rd Step... 

// function interest ( principle, rate = 3.5, years ) {
//     return principle * rate / 100 * years;
// }

// console.log(interest(10000, undefined ,5));