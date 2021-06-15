function _bottleFactory(){
    let input = Number(prompt(`Enter the total coconut oil in millilitres (ml)`));
    let count = 0;
    let quotient = 0;
    let remainder = 0;
    let types = {
        "400ml bottle": 0,
        "240ml bottle": 0,
        "135ml bottle": 0,
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

    // Calculate the minimum number of full bottles
    function _minNumberOfBottles(){
        quotient = Math.floor(input / 845);
        while (count < quotient){
            for (i in types){
                types[i] += 1;
            }
            count ++;
        }
        quotient = 0;
        count = 0;
    }

    // Dividing the remaining amount as much as possible
    function _remainingOil(){
        remainder = Math.floor(input % 845);
        while (count < 5){
            if (remainder % 400 == 0 || Math.floor(remainder / 400) >= 1){
                quotient = Math.floor(remainder / 400);
                remainder = Math.floor(remainder % 400);
                types["400ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 240 == 0 || Math.floor(remainder / 240) >= 1) {
                quotient = Math.floor(remainder / 240);
                remainder = Math.floor(remainder % 240);
                types["240ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 135 == 0 || Math.floor(remainder / 135) >= 1){
                quotient = Math.floor(remainder / 135);
                remainder = Math.floor(remainder % 135);
                types["135ml bottle"] += quotient;
                quotient = 0;
            } else if (remainder % 75 == 0 || Math.floor(remainder / 75) >= 1){
                quotient = Math.floor(remainder / 75);
                remainder = Math.floor(remainder % 75);
                types["75ml bottle"] += quotient;
                quotient = 0;
            } 
            count ++
        }
        // Add remaining amount to partially filled bottles if the amout is greater than or equal to 38 (half of 75ml bottle).
        if (remainder >= 38){
            remainder -= remainder; 
            types["75ml bottle"] += 1;
        }
    }
    
    // Print the final summary
    function _finalDetails(){
        console.log(`Total number of millilitres = ${input}ml`);
        let details = Object.keys(types);
        details.forEach((key) => {
            console.log(`${key} = ${types[key]}`);
        });
        console.log(`Remaining Amount = ${remainder}ml`)
    }
}

_bottleFactory();
