import {chessBoard} from './board.js';
console.log(chessBoard);


function movePiece(move, to){
    console.log(chessBoard[move].type);
    chessBoard[move].type == "king" ? console.log("Pawn") : console.log("no");
    chessBoard[to] = chessBoard[move]
    chessBoard[to].position = to;
    chessBoard[move] = {}
}
// console.log(chessBoard.A2);

// chessBoard.A2 = {}
// console.log(chessBoard.A2);
// console.log(chessBoard.A3);
movePiece('A2', 'A3');
console.log(chessBoard);