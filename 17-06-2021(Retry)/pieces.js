export function King (color, position){
    this.type = "King";
    this.color = color;
    this.position;
    this.movePatterns = ["any"];
}

export function Queen (color, position){
    this.type = "Queen";
    this.color = color;
    this.position;
    this.movePatterns = ["any"];
}

export function Rook (color, position){
    this.type = "Rook";
    this.color = color;
    this.position;
    this.movePatterns = ["vertical", "horizontal"];
}

export function Knight (color, position){
    this.type = "Knight";
    this.color = color;
    this.position;
    // Breadth First Search or BFS
    this.movePatterns = ["Lway"];
}

export function Bishop (color, position){
    this.type = "Bishop";
    this.color = color;
    this.position;
    this.movePatterns = ["diagonal"];
}

export function Pawn (color, position){
    this.type = "Pawn";
    this.color = color;
    this.position;
    this.movePatterns = ["forward", "diagonal"];
}

//WhitePlayers
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

export const whiteMainPieces = [whiteRook_01, whiteKnight_01, whiteBishop_01, whiteKing, whiteQueen, whiteBishop_02, whiteKnight_02, whiteRook_02];
export const blackMainPieces = [blackRook_01, blackKnight_01, blackBishop_01, blackKing, blackQueen, blackBishop_02, blackKnight_02, blackRook_02];
export const whitePawnPieces = [whitePawn_01, whitePawn_02, whitePawn_03, whitePawn_04, whitePawn_05, whitePawn_06, whitePawn_07, whitePawn_08];
export const blackPawnPieces = [blackPawn_01, blackPawn_02, blackPawn_03, blackPawn_04, blackPawn_05, blackPawn_06, blackPawn_07, blackPawn_08];

