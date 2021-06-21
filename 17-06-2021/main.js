// method one
function main (){
    const chessBox = {
        a8: null, b8: null, c8: null, d8: null, e8: null, f8: null, g8: null, h8: null,
        a7: null, b7: null, c7: null, d7: null, e7: null, f7: null, g7: null, h7: null, 
        a6: null, b6: null, c6: null, d6: null, e6: null, f6: null, g6: null, h6: null,
        a5: null, b5: null, c5: null, d5: null, e5: null, f5: null, g5: null, h5: null,
        a4: null, b4: null, c4: null, d4: null, e4: null, f4: null, g4: null, h4: null,
        a3: null, b3: null, c3: null, d3: null, e3: null, f3: null, g3: null, h3: null,
        a2: 'pw', b2: 'pw', c2: 'pw', d2: 'pw', e2: 'pw', f2: 'pw', g2: 'pw', h2: 'pw',
        a1: 'rw', b1: 'kw', c1: 'bw', d1: 'cw', e1: 'qw', f1: 'bw', g1: 'kw', h1: 'rw'
    }

    // Diagonal rules
    const diagonals = {
        a:['b'],
        b:['a','c'],
        c:['b','d'],
        d:['c','e'],
        e:['d','f'],
        f:['e','g'],
        g:['f','h'],
        h:['g']
    }
    // let check = 'a2';
    // console.log(check.slice(0, check.length -1));
    // console.log(diagonals[check.slice(0, check.length -1)]);
    movePawn('b2', 'b3', 'forward');
    
    function movePawn(curentPos, movePos, moveMethod){
        let rule = diagonals[curentPos.slice(0, curentPos.length -1)];
        // console.log(chessBox[curentPos]);
        // console.log(movePos.slice(1));
        // console.log(Number(curentPos[1] + 1));
        if (moveMethod == 'forward'){
            movePos[0] == curentPos[0] && (movePos.slice(1)) == (Number(curentPos.slice(1))+1) ?
            console.log("legal move")
            // chessBox[movePos] = chessBox[curentPos]
            // chessBox[curentPos] = null
            : 
            console.log("illegal move");
        }
        else if(moveMethod == 'diagonal') { 
            for(i in rule){
                if (rule[i] == movePos[0]){
                    console.log('Move Diagonal');
                }else{
                    console.log('Invalid move: Cant move diagonally');
                }
            }
        } 
    }
    console.log(chessBox);
}

main();

// Testing
// const chessBox = {
//     h : {1: 'r', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     g : {1: 'k', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     f : {1: 'b', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     e : {1: 'q', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     d : {1: 'c', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     c : {1: 'b', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     b : {1: 'k', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
//     a : {1: 'r', 2: 'p', 3: null, 4: null, 5: null, 6: null, 7: null, 8: null },
// }