let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(text) {
    for (let i = 0; i < text.length; i = i + 2) {
        console.log(text[i]);
    }

    rl.close();
});