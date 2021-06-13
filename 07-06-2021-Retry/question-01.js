function palindrom(){
    let input = prompt("Enter a word");
    let revWord = "";
    let result = "";
    let count = 1;

    // Method 01
    // Checking whether the revWord and input are equal/ if equal break -> else add letter by letter to revWord.
    // while (true){
    //     if (revWord == input || count > 10){
    //         break;
    //     }else{
    //         revWord = revWord + input.substr(-count, 1);
    //         console.log(revWord);
    //         count++; 
    //     }
    // }

    // Method 02
    for (i = 1; input.length >= i; i++){
        revWord = revWord + input.substr(-i, 1);
    }

    result = input.toLowerCase() == revWord.toLowerCase() ? `${input} is a Palindrom` : `${input} is not a Palindrom`;
    alert(result);
}

palindrom();


// Usable funtions:
// indexOf
// lastIndexOf
// substring
// substr
// search
// slice