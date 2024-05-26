//! call function...

/*
function greet(greeting, lastName) {
    console.log(greeting + ', ' + this.name + lastName);
}

const person = { name: 'Ashikur' };

greet.call(person, 'Hello' , ' ' + 'Rahman'); 

*/

//! apply...

/*

function greet ( greeting, lastName ) {
    console.log(greeting + ', ' + this.first_name + lastName);
}

const person = {first_name: 'Ashikur'};

greet.apply(person, ['Hello', ' ' + 'Rahman']);

*/


const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: 'John',
    lastName : 'Doe'
}

console.log(person.fullName.call(person1));
console.log(person.fullName.apply(person1));