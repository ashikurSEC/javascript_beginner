const numbers = [1, -1, 2, 3];

// const filteredBy = numbers.filter((n) => n >= 0);

// const items = filteredBy.map( n => '<li>' + n + '</li>');
// const join = items.join('');

// const items = filteredBy.map((n) => {
//   return { value: n };                                                  
// });

// const items = filteredBy.map(n => `{value: ${n}}`); //! ({value : n})

// console.log(items);


const items = numbers.filter( n => n >= 0 ).map(n => `{value: ${n}}`);

console.log( items );