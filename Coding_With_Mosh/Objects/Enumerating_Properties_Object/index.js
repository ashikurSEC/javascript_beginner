const circle = {
    radius: 1,
    john () {
        console.log('Hello John!');
    }
}


for (let key in circle){
    console.log(key, circle[key]);
}


for(let key of Object.keys(circle)) {
    console.log(key);
}


for (let entry of Object.entries(circle)) {
    console.log( entry );
}

if ('color' in circle) {
    console.log('Yes');
}else {
    console.log('No');
}