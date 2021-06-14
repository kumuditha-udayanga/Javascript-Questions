function _bottleFactory(){
    let input = Number(prompt(`Enter the total coconut oil in "ml"`));
    let count = 0;
    let quotient = 0;
    let remainder = 0;
    let types = {
        "400ml bottle": 0,
        "240ml bottle": 0,
        "130ml bottle": 0,
        "75ml bottle": 0
    };

    // Check whether input is greater or equal 1000
    if (input >= 1000){
        _minNumberOfBottles();
        _remainingOil();
        _finalDetails();
    } else{
        console.log("Error: Minimum Value is 1000ml")
    }

    function _minNumberOfBottles(){
        quotient = Math.floor(input / 875);
        console.log(quotient); // Testing purposes
        while (count < quotient){
            for (i in types){
                types[i] += 1;
            }
            count ++;
        }
        quotient = 0;
        count = 0;
    }

    function _remainingOil(){
        remainder = Math.floor(input % 875);
        console.log(remainder);  // Testing purposes
        while (count < 5){
            if (remainder % 400 == 0 || Math.floor(remainder / 400) >= 1){
                console.log("400");             // Testing purposes
                quotient = Math.floor(remainder / 400);
                remainder = Math.floor(remainder % 400);
                console.log(remainder)          // Testing purposes
                types["400ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 240 == 0 || Math.floor(remainder / 240) >= 1) {
                console.log("240");             // Testing purposes
                quotient = Math.floor(remainder / 240);
                remainder = Math.floor(remainder % 240);
                console.log(remainder)          // Testing purposes
                types["240ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 130 == 0 || Math.floor(remainder / 130) >= 1){
                console.log("130");             // Testing purposes
                quotient = Math.floor(remainder / 130);
                remainder = Math.floor(remainder % 130);
                console.log(remainder)          // Testing purposes
                types["130ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 75 == 0 || Math.floor(remainder / 75) >= 1){
                console.log("75");              // Testing purposes
                quotient = Math.floor(remainder / 75);
                remainder = Math.floor(remainder % 75);
                console.log(remainder)          // Testing purposes
                types["75ml bottle"] += quotient;
                quotient = 0;
            } 
            count ++
        }
        console.log(types);
        console.log(remainder);
    }

    function _finalDetails(){
        let details = Object.keys(types);
        details.forEach((key, index) => {
            console.log(`${key}: ${types[key]}`);
        });
        console.log(`Remaining Amount = ${remainder}`)
    }

    // let bottleType = "75ml"; 
    // let array = {bottleType: 2, "130ml":0, "240ml":0, "400ml": 2};
    // console.log(array);
    // array.bottleType +1;
    // console.log(Object.keys(array));
}

_bottleFactory();

// let numb = 13540;
// let quotient = Math.floor(numb / 9);
// let remainder = numb % 9;
// console.log(quotient);
// console.log(remainder);