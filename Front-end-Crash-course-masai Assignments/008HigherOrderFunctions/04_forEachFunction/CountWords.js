/*

<==========================Problem Statement================================>

•
-Given an array of strings representing sentences, write a function that logs (console.log()) the number of words in each sentence to the console using .forEach()

-for each sentence print a message "sentence 1 contains 9 words."
in console.

-here in the message 1 is index(one base(starts from one)) of the sentence and 9 is the number of words it contains.both the value should be changed as per the sentence.

input:==>

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];

output:==>

output should look like this.-->

"sentence 1 contains 9 words."


*/

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];

sentences.forEach((sentence,ind)=>{
    const wordCount=sentence.split(" ").length
    console.log(`sentence ${ind+1} contains ${wordCount} words.`)
})  
