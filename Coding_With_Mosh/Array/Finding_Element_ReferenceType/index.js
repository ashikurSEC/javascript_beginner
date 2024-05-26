const courses = [
    {id: 1, names: 'Ashikur'},
    {id: 2, names: 'Tamim'}
];

const course = courses.find(function( course ) {
    return course.names === 1;
});

console.log( course );