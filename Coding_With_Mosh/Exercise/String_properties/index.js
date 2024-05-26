const movie = {
    'name'          : 'Train Busan',
    'releaseYear'   : 2017,
    'title'         : 'Zombie',
    'rate'          : 5,
    'make'          : 'Korean',
};

function showProperties ( obj ) {
    for ( let key in obj ) {
        if ( typeof obj[key] === 'string' ) {
            console.log(key, obj[key]);
        }
    }
}

showProperties( movie );