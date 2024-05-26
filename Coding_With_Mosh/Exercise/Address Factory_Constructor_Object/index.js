//! Address Factory function and constructor... 

// Street
// City
// Zip_Code


function createAddress ( street, city, zip_code ) {
    return {
        street, 
        city,
        zip_code
    };
}

function Address ( street, city, zip_code ) {
    this.street     = street;
    this.city       = city;
    this.zip_code   = zip_code;
}

const address = new Address ('Kolpara', 'Pabna', 6630);
console.log( address );