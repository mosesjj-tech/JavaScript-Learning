let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

function question11() {
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
    });
}

console.log("PROGRAMMING SNACKS - JAVASCRIPT");
console.log("3. Minimum sales");
console.log("4. Palindrome checker");
console.log("5. Count vowels and consonants");
console.log("6. Even index characters");
console.log("7. Reverse a string");
console.log("8. ISBN-13 validator");
console.log("9. Three-number combinations");
console.log("10. Number guessing game");
console.log("11. Display words separately");

rl.question("Choose a question (3-11): ", function(answer) {
    let choice = Number(answer);

    if (choice === 3) {
        console.log("Question 3 is not added yet.");
        rl.close();
    } else if (choice === 4) {
        console.log("Question 4 is not added yet.");
        rl.close();
    } else if (choice === 5) {
        console.log("Question 5 is not added yet.");
        rl.close();
    } else if (choice === 6) {
        console.log("Question 6 is not added yet.");
        rl.close();
    } else if (choice === 7) {
        console.log("Question 7 is not added yet.");
        rl.close();
    } else if (choice === 8) {
        console.log("Question 8 is not added yet.");
        rl.close();
    } else if (choice === 9) {
        console.log("Question 9 is not added yet.");
        rl.close();
    } else if (choice === 10) {
        console.log("Question 10 is not added yet.");
        rl.close();
    } else if (choice === 11) {
        question11();
    } else {
        console.log("Invalid choice.");
        rl.close();
    }