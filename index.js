
//first exemple

/* function hideString (str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello World");

console.log( hidden );

console.log('end') ; */

//sencond exemple

function hideString(str, done) {
    done(str.replace(/[a-zA-Z]/g, 'X'));
}
hideString("Hello World", (hidden) => {
    console.log( hidden );
});

console.log( 'end' );


