
// Speed Limit = 70;
// 5 -> 1 Points;
// Math.floor(1.3);
// 12 >= points = 'License Suspended';

 
function checkSpeed ( speed ) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if ( speed < speedLimit + kmPerPoint ) {
        console.log('Okay');
    }else {
        const points = Math.floor( speed - speedLimit ) / kmPerPoint;

        if ( points >= 12 ) {
            console.log('License Suspended');
        }else {
            console.log('Earn points: ', points);
        }
    }
}

checkSpeed( 130 );