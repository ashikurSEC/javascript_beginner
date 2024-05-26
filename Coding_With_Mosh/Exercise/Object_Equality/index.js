
let address1 = new Address('Kolpara', 'Pabna', 6630);
let address2 = new Address('Kolpara', 'Pabna', 6630);

console.log(areEqual(address1, address2));
console.log(sameEqual(address1, address2));


function Address ( street, city, zip_code ) {
    this.street     = street;
    this.city       = city;
    this.zip_code   = zip_code;
}


function areEqual (address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zip_code === address2.zip_code;
}

function sameEqual (address1, address2) {
    return address1 === address2;
}