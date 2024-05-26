// Street 
// City
// ZipCode
// ShowAdress ( address )


const address = {
    street  : 'Kalpara',
    city    : 'Pabna',
    zipCode : 6630
}

function showAdress ( address ) {
    for ( let key in address ) {
        console.log(key, address[key]);
    }
}

showAdress( address );