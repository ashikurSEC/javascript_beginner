const person = {
    firstName   : 'Ashikur',
    lastName    : 'Rahman',

    get fullName () {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName ( value ) {
        if (typeof value !== 'string')
            throw new Error('Value is not String!');


        const parts    = value.split(' ');

        // if (parts.length !== 20)
        //     throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.lastName  = parts[1]; 
    }
};

try  {
    person.fullName = null; // Default value output firstName: Ashikur lastName: Rahman
}

catch ( e ) {
    alert( e );
}



console.log(person);