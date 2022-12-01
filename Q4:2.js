//using for loop.js

const mySentence = "we have a big sale at the store!";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
console.log(words.join(" "));

//using map

const mySentence1 = "we have a big sale at myntra!";
const words1 = mySentence1.split(" ");

console.log(words1.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" "));
