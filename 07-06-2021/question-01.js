function palindrom(){
    let input = prompt("Enter a word");
    let revWord = "";

    for (i in input){
        revWord = input[i] + revWord;
    }

    if (revWord == input){
        alert(`${input} is a Palindrom`);
    } else{
        alert(`${input} is not a Palindrom`);
    }
    
    console.log(input);
    console.log(revWord);
    
}
// palindrom();