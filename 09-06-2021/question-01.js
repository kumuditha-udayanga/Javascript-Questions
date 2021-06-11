function reverseArray(){
    let input = prompt("Enter an array Example: 1,2,3,4");
    let array = input.split(",");
    let revArray = [];
    let lenArray = array.length -1 ;

    // for (i = 1; i < array.length; i ++){
    //     revArray.push(array.slice(-i))
    // }

    while (revArray.length < array.length){
        revArray.push(array[lenArray]);
        lenArray --;
    }

    console.log(revArray);
}
reverseArray();