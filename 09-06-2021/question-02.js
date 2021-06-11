function elementCount(){
    let input = prompt("Enter an array");
    let array = input.split(",");
    let nonDupArr = [];
    let count = 0;

    for (i in array){
        if (nonDupArr.includes(array[i]) == false){
            nonDupArr.push(array[i]);
        }else{
            console.log(nonDupArr.includes(array[i]));
        }
    }

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