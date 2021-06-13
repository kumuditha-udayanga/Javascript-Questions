function reverseSentence(){

    let input = prompt("Enter a sentence");
    let sentence = ` ${input}`;
    let revSentence = " ";
    let pos = 0;
    
// Searching for the " " charactor index "pos", and separating a word using substr and pos to "word".
// Then adding "word" to "revSentence"
    for (i = 0; i < sentence.length; i++){
        pos = sentence.lastIndexOf(" ");
        word = sentence.substr(pos, sentence.length);
        revSentence += word;
        sentence = sentence.replace(word,"");
    }

    console.log(revSentence)
}

reverseSentence();

// Usable funtions:
// indexO
// lastIndexOf
// substring
// substr
// search
// slice