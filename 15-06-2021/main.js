function _main(key){
    let player01Rounds = 0;
    let player02Rounds = 0;
    let player01Name = "";
    let player02Name = "";
    let rounds = 0;

//    On goinging
    while(key !== 49){
        if (player01Name == "" && player02Name == ""){
            player01Name = prompt("Enter player 01 name");
            player02Name = prompt("Enter player 02 name"); 
        }
         _player01();
         _player02();
    }
}

// function _player01() {
//     let diceNumber = Math.floor(Math.random() * 6) + 1;
//     let movedSquare = 49;
//     let rubyCount = 0;
//     let totalCash = 0;
//     _round(movedSquare, rubyCount, totalCash);
// }

// function _player02() {
//     let diceNumber = Math.floor(Math.random() * 6) + 1;
//     let movedSquare = 0;
//     let rubyCount = 0;
//     let totalCash = 0;
//     _round(movedSquare, rubyCount, totalCash);
// }


function _round (movedSquare, rubyCount, totalCash){
    let squares = {
        01: "null", 02: "null", 03: "ladder", 04: 3, 05: "null", 06: "null", 07: "ruby", 08: "ladder", 09: "snake", 10: "null",
        11: "null", 12: "null", 13: 12, 14: "ruby", 15: "ladder", 16: "null", 17: "null", 18: "snake", 19: "ruby", 20: "ladder",
        21: "null", 22: "null", 23: "null", 24: "null", 25: 24, 26: "ladder", 27: "null", 28: "null", 29: "null", 30: "ruby",
        31: "null", 32: "null", 33: "null", 34: 45, 35: "null", 36: "snake", 37: 900, 38: "null", 39: "null", 40: "ruby",
        41: "null", 42: "null", 43: "null", 44: "snake", 45: "null", 46: "ruby", 47: "null", 48: "snake", 49: 30000
    };
    
    let square = Object.keys(squares);
    square.forEach((key) => {
        if (key == movedSquare) {
            if (squares[key] == "ladder"){
                console.log("LADDER");
                movedSquare = _ladders(key,movedSquare);
            }else if(squares[key] == "snake"){
                console.log("SNAKE");
                movedSquare = _snakes(key,movedSquare);
            }else if(squares[key] == "ruby"){
                console.log("RUBY");
                rubyCount += 1;
            }else if(typeof(squares[key]) == "number"){
                console.log("MONEY");
                totalCash += squares[key];
            }else if (key == 49){
                totalCash += squares[key];
                main(key);
            }
        }
    });
    console.log(movedSquare);
    console.log(totalCash);
    
}

function _ladders (squareNumber, movedSquare){
    if (squareNumber == 3){
        movedSquare = 17;
    }else if (squareNumber == 8){
        movedSquare = 22;
    }else if (squareNumber == 15){
        movedSquare = 42;
    }else if (squareNumber == 20){
        movedSquare = 38;
    }else if (squareNumber == 26){
        movedSquare = 39;
    }
    return movedSquare;
}

function _snakes (squareNumber, movedSquare){
    if (squareNumber == 9){
        movedSquare = 5;
    }else if (squareNumber == 18){
        movedSquare = 10;
    }else if (squareNumber == 36){
        movedSquare = 22;
    }else if (squareNumber == 44){
        movedSquare = 16;
    }else if (squareNumber == 28){
        movedSquare = 33;
    }
    return movedSquare;
}


