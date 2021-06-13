function elementCount(){
    let input = prompt("Enter an array");
    let array = input.split(",");
    let nonDupArr = [];
    let count = 0;
    // Remove dulpicate elements
    for (i in array){
        if (nonDupArr.includes(array[i]) == false){
            nonDupArr.push(array[i]);
        }else{
            console.log(nonDupArr.includes(array[i]));
        }
    }
    // Comparing 'nonDupArr' with 'array' if equals found in a specific element count of that element increases.
    for (i in nonDupArr){
        for (j in array){
            if (nonDupArr[i] == array[j]) {
                count = count + 1;
            }
        }
        console.log(`${nonDupArr[i]} = ${count}`);
        count = 0;
    }
}   
elementCount();