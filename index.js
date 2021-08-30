
//first exemple

/* function hideString (str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello World");

console.log( hidden );

console.log('end') ; */

//sencond exemple

/* function hideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    })
    
}
hideString("Hello World", (hidden) => {
    console.log( hidden );
});

console.log( 'end' ); */


// to be a callback it needs to be async
// process.nextTick () logs the hideString in the next loop, in the next tick --that's the key that makes it a callback
// the done function inside the process.nextTick() is the callback


/* function delay(seconds, callback) {
    setTimeout(callback, seconds*1000)
}

console.log('starting delays');
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        })
    })
}) */


// promises

/* var delay = (seconds) => new Promise((resolves, rejects) => {

    if ( seconds > 3) {
        rejects(new Error(`${seconds} is to long!`))
    }
    
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

delay(4)
.then(console.log)
.then(() => 42 )
.then((number) => console.log(`my number is ${number}`))
.catch((error) => console.log(`error; ${error.message}`))

console.log('end first tick'); */

// The promisify function

/* var { promisify } = require('util');

var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() => 
            callback(null, `the ${seconds} second delay is over.`),
            seconds        
        );
    }
}

var promiseDelay = promisify(delay)

promiseDelay(5)
    .then(console.log)
    .catch((error) => console.log(`error: &{error.message}`)); */


    //write module 

    var fs = require('fs');
    var { promisify } = require('util');


    var writeFile = promisify(fs.writeFile);

    writeFile('sample.txt', 'This is a sample')
    .then(() => console.log('File successfully created'))
    .catch((error) => console.log('error creating file'));
