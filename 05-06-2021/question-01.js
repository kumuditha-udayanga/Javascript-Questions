// Question: 01 - Reminder and Quotient of two numbers
function divisor (){
    var number01 = Number(prompt("Enter First Number"));
    var number02 = Number(prompt("Enter Second Number"));
    var reminder = 0;
    var quotient = 0;
    if (isNaN(number01) || isNaN(number02)){
        console.log("Error: Enter a number");
    }else{
        reminder = number01 % number02;
        quotient = number01 / number02;
        console.log("Reminder and Quotient of "+ number01 + "/" + number02 + " ==> " + reminder + ", " + quotient);
    }
}

divisor();