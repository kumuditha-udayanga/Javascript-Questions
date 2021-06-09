function reverseWordsInSentence(){
    let input = prompt("Enter a sentence");
    let word = " ";
    let startIndex = 0;
    let revWord = " ";
    let reverseSentence = " ";

    for (i in input){
        if (input[i] == " "){
            word = input.slice(startIndex, i);
            for (n in word){
                revWord = word[n] + revWord;
            }
            reverseSentence = reverseSentence.concat(" ", revWord);
            startIndex = i;
        }else if (i == input.length - 1){
            word = input.slice(startIndex, i + 1);
            for (n in word){
                revWord = word[n] + revWord;
            }
            reverseSentence = reverseSentence.concat("", revWord);
        }
        revWord = "";
    }
    alert(reverseSentence);
}
// reverseWordsInSentence();
