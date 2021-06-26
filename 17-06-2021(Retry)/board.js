// const chessBoard = {
//     a8: null, b8: null, c8: null, d8: null, e8: null, f8: null, g8: null, h8: null,
//     a7: null, b7: null, c7: null, d7: null, e7: null, f7: null, g7: null, h7: null, 
//     a6: null, b6: null, c6: null, d6: null, e6: null, f6: null, g6: null, h6: null,
//     a5: null, b5: null, c5: null, d5: null, e5: null, f5: null, g5: null, h5: null,
//     a4: null, b4: null, c4: null, d4: null, e4: null, f4: null, g4: null, h4: null,
//     a3: null, b3: null, c3: null, d3: null, e3: null, f3: null, g3: null, h3: null,
//     a2: null, b2: null, c2: null, d2: null, e2: null, f2: null, g2: null, h2: null,
//     a1: null, b1: null, c1: null, d1: null, e1: null, f1: null, g1: null, h1: null
// }

// // Diagonal rules
// const diagonals = {
//     a:['b'],
//     b:['a','c'],
//     c:['b','d'],
//     d:['c','e'],
//     e:['d','f'],
//     f:['e','g'],
//     g:['f','h'],
//     h:['g']
// }
import { players } from './pieces.js'

let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let chessBoard  = {}
for (let i in letterArray){
    for (var x = 1; x < 9; x++) {
        chessBoard[letterArray[i]+x] = {};
      }
}
console.log(players);
