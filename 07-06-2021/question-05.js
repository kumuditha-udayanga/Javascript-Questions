function minifiedSentence(){
    let input  = prompt("Enter a sentence");
    let sentence = input.trim();
    let minified = '';

    for (i in sentence){
        if (sentence[i] == " "){
            sentence = sentence.replace(" ", "");
        }
    }

    for (i in sentence){
        minified = sentence[i] + minified;
    }
    
    console.log(sentence);
    console.log(minified);
}
// minifiedSentence();