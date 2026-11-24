let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout


rl.question("Enter a sentence: ", function(text) {
    let word = "";

    for (let letter of text) {
        if (letter === " ") {
            if (word !== "") {
                console.log(word);
                word = "";
            }
        } else {
            word = word + letter;
        }
    }

    if (word !== "") {
        console.log(word);
    }

    rl.close();
