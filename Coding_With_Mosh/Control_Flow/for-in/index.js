const person = {
    name: 'Ashikur Rahman',
    age : 20,
    job : 'Web Developer',
    email : 'ashikurrahman7194@gmail.com',
    phone : 01700917194,
    address : 'Dhaka'
};

for ( let key in person ) {
    console.log(key, person[key]);
}


//! Array Using with for in... 

const colors = ['Red', 'Green', 'Blue', 'Megenta'];

for ( let index in colors ) {
    console.log(index, colors[index]);
}