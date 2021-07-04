function calculate(operation, number01, number02){
    add = (number01) => (number02) => number01 + number02;
    subtract  = (number01) => (number02) => number01 - number02;
    divide = (number01) => (number02) => number01 / number02;
    multiply = (number01) => (number02) => number01 * number02;
    if (operation == 'add'){
        console.log(add(number01)(number02)); 
    } else if (operation == 'substract'){
        console.log(subtract(number01)(number02)); 
    } else if (operation == 'divide'){
        console.log(divide(number01)(number02)); 
    } else if (operation == 'multiply'){
        console.log(multiply(number01)(number02)); 
    }
}

calculate("add", 12, 14);