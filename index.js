
//first exemple

/* function hideString (str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello World");

console.log( hidden );

console.log('end') ; */

//sencond exemple

function hideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    })
    
}
hideString("Hello World", (hidden) => {
    console.log( hidden );
});

console.log( 'end' );


// to be a callback it needs to be async
// process.nextTick () logs the hideString in the next loop, in the next tick
// the done function inside the process.nextTick() is the callback


