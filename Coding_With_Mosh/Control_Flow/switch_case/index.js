// Role = 'User'

// If Conditions gest = 'Gest User'
// if Conditions Modaretor = 'Modaretor User'
// defatult = 'Unknown Users'


let roles = 'gest';


switch ( roles ) {
    case 'gest':
        console.log('Gest User');
        break;

    case 'Moderator':
        console.log('Modaretor User');
        break;

    default:
        break;
}


// Another Way 

let role = 'Modaretor';

if ( role === 'Modaretor') {
    console.log('Modaretor User');
} else if ( role === 'Gest' ) {
    console.log('Gest User');
} else  {
    console.log('Unknown Users');
}

