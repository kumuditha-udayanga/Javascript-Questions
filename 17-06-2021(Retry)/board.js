import { whiteMainPieces, whitePawnPieces, blackMainPieces, blackPawnPieces } from './pieces.js'

let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let chessBoard  = {}

// Genarate broad
for (let i in letterArray){
  for (var x = 1; x < 9; x++) {
    chessBoard[letterArray[i]+x] = {};
  }
}

// Initial Setup

// White Pieces
for (let i in whiteMainPieces){
  chessBoard[letterArray[i]+1] = whiteMainPieces[i];
  whiteMainPieces[i].position = letterArray[i]+1;
}

for (let i in whitePawnPieces){
  chessBoard[letterArray[i]+2] = whitePawnPieces[i];
  whitePawnPieces[i].position = letterArray[i]+2;
}
// Black Pieces
for (let i in blackMainPieces){
  chessBoard[letterArray[i]+8] = blackMainPieces[i];
  blackMainPieces[i].position = letterArray[i]+8;
}

for (let i in blackPawnPieces){
  chessBoard[letterArray[i]+7] = blackPawnPieces[i];
  blackPawnPieces[i].position = letterArray[i]+7;
}

export {chessBoard};