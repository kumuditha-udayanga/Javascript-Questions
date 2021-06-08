// Question: 04 - Calculator
// TODO: Use string manipulation
function calculator () {
    var input = prompt("Enter your problem in this format (2 + 2)");
    var inputList = input.split(" ");
    var operator = inputList[1];
    var number01 = Number(inputList[0]);
    var number02 = Number(inputList[2]);
    if (typeof inputList[1] !== "number"){
        alert("not a number");
    }
    function add (){
        var answer = number01 + number02
        alert(number01+ operator +number02+ " = " + answer);
    }
    function subtract (){
        var answer = number01 - number02
        alert(number01+ operator +number02+ " = " + answer);
    }
    function divide () {
        var answer = number01 / number02
        alert(number01+ operator +number02+ " = " + answer);
    }
    function multiply (){
        var answer = number01 * number02
        alert(number01+ operator +number02+ " = " + answer);
    }

    if (operator == "+"){
        add();
    } else if (operator == "-"){
        subtract();
    } else if (operator == "/"){
        divide();
    }else if (operator == "*"){
        multiply();
    }else{
        console.log("Error: Enter using the valid format");
        alert("Error: Enter using the valid format");
    }
}
