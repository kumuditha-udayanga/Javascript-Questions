function reverseWordSentence(){
    let input = "Enter a sentence";
    let sentence = ` ${input}`;
    let revWordSentence = " ";
    let revWord = "";
    let pos = 0;
    // separate word by word
    for (i = 0; i < sentence.length; i++){
        pos = sentence.lastIndexOf(" ");
        word = sentence.substr(pos, sentence.length);
        sentence = sentence.replace(word,"");
        // Reversing word
        for (j = 1; word.length >= j; j++){
            revWord = revWord + word.substr(-j, 1);
        }
        console.log(revWord);
        // Add reversed word to revWordSentence variable
        revWordSentence = revWord + revWordSentence;
        revWord = "";
    }
    console.log(revWordSentence);
}
reverseWordSentence();

 // Usable funtions:
// indexO
// lastIndexOf
// substring
// substr
// search
// slice