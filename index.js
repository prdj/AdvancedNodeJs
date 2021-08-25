function hideString (str) {
    return str.reaplace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello World");

console.log( hidden );

