function reverseWords(){
    let input = prompt("Enter a sentence");
    let word = " ";
    let startIndex = 0;
    let reverseSentence = " ";

    for (i in input){
        if (input[i] == " "){
            word = input.slice(startIndex, i);
            reverseSentence = word.concat(" ",reverseSentence);
            startIndex = i;
        }else if (i == input.length - 1){
            word = input.slice(startIndex, i + 1);
            reverseSentence = word.concat("",reverseSentence);
        }
    }
    alert(reverseSentence);
}

