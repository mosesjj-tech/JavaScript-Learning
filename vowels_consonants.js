let vowels = 0;
let consonants = 0;

for (let letter of text) {
    if (letter >= "a" && letter <= "z") {
        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
        ) {
            vowels = vowels + 1;
        } else {
            consonants = consonants + 1;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

rl.close();