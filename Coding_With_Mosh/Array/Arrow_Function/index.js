const courses = [
    {id: 1, name: 'Ashikur'},
    {id: 2, name: 'Priya'}
];


const course = courses.find(course => course.name === 'Ashikur');
console.log(course);