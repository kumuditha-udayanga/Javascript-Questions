add = (number01) => (number02) => number01 + number02;
subtract  = (number01, number02) => number01 - number02;
divide = (number01) => (number02) => number01 / number02;
multiply = (number01) => (number02) => number01 * number02;

function calculate(operation, number01, number02){
    console.log(operation(number01, number02));
}

calculate(subtract, 12, 14);
