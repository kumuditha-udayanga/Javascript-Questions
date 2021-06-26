// function Piece(color, type, currentPosition, movingPosition) {
//     this.color = color;
//     this.currentPosition = currentPosition;
//     this.movingPosition = movingPosition;
//     this.movingPatterns = [];
// }  

function King (color){
    this.type = "King";
    this.color = color,
    this.position,
    this.movingPosition,
    this.movePatterns = ["any"]
}

function Queen (color){
    this.type = "Queen";
    this.color = color,
    this.position,
    this.movingPosition,
    this.movePatterns = ["any"]
}

function Rook (color){
    this.type = "Rook";
    this.color = color,
    this.position,
    this.movingPosition,
    this.movePatterns = ["vertical", "horizontal"]
}

function Knight (color){
    this.type = "Knight";
    this.color = color,
    this.position,
    this.movingPosition,
    // Breadth First Search or BFS
    movePatterns = ["Lway"]
}

function Bishop (color){
    this.type = "Bishop";
    this.color = color,
    this.position,
    this.movingPosition,
    this.movePatterns = ["diagonal"]
}

function Pawn (color){
    this.type = "Pawn";
    this.color = color,
    this.position,
    this.movingPosition,
    this.movePatterns = ["forward", "diagonal"];
}

function players(){
    //White players
    const whiteKing = new King('white');
    const whiteQueen = new Queen('white');
    const whiteRook_01 = new Rook('white');
    const whiteRook_02 = new Rook('white');
    const whiteBishop_01 = new Bishop('white');
    const whiteBishop_02 = new Bishop('white');
    const whiteKnight_01 = new Knight('white');
    const whiteKnight_02 = new Knight('white');

    const whitePawn_01 = new Pawn('white');
    const whitePawn_02 = new Pawn('white');
    const whitePawn_03 = new Pawn('white');
    const whitePawn_04 = new Pawn('white');
    const whitePawn_05 = new Pawn('white');
    const whitePawn_06 = new Pawn('white');
    const whitePawn_07 = new Pawn('white');
    const whitePawn_08 = new Pawn('white');

    //Black players
    const blackKing = new King('black');
    const blackQueen = new Queen('black');
    const blackRook_01 = new Rook('black');
    const blackRook_02 = new Rook('black');
    const blackBishop_01 = new Bishop('black');
    const blackBishop_02 = new Bishop('black');
    const blackKnight_01 = new Knight('black');
    const blackKnight_02 = new Knight('black');

    const blackPawn_01 = new Pawn('black');
    const blackPawn_02 = new Pawn('black');
    const blackPawn_03 = new Pawn('black');
    const blackPawn_04 = new Pawn('black');
    const blackPawn_05 = new Pawn('black');
    const blackPawn_06 = new Pawn('black');
    const blackPawn_07 = new Pawn('black');
    const blackPawn_08 = new Pawn('black');
}

export {players};