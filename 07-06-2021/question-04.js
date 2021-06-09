function currency(){
    let input = prompt("Enter a Value");
    let lenThousand = 4;
    let lenTenThousand = 5;
    let lenHunThousand = 6;
    let lenMillion = 7;
    let lenBillion = 10;
    let lenTrillion = 13;
    let result = '';
    let number = input;
    let decimal = 0;
    let roundoff = 0;

    for (i in input){
        if (input[i] == "."){
            number = input.substring(0, i);
            decimal = input.substring(i, input.length);
            roundoff = Number(Math.round(decimal));
        }
    }
 
    if (number.length == lenThousand){
        result = number.substring(0, 1)+ "," + number.substring(1, number.length);
    }else if (number.length == lenTenThousand){
        result = number.substring(0, 2)+ "," + number.substring(2, number.length);
    }else if (number.length == lenHunThousand){
        result = number.substring(0, 3)+ "," + number.substring(3, number.length);
    }else if (number.length == lenMillion){
        result = number.substring(0, 1)+ "," + number.substring(1, 4) + "," + number.substring(4, number.length);
    }else if (number.length == lenBillion || number.length == 8 || number.length == 9){
        result = number.substring(0, 1)+ "," + number.substring(1, 4) + "," + number.substring(4, 7) + "," + number.substring(7, number.length);
    }else if (number.length == lenTrillion || number.length == 11 || number.length == 12){
        result = number.substring(0, 1)+ "," + number.substring(1, 4) + "," + number.substring(4, 7) + "," + number.substring(7, 10) + "," + number.substring(10, number.length);
    }else{
        result = number
    }

    console.log(`${result}.${roundoff}`);
}
// currency();x