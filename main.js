// Intizialing global variables
const boardSize = 8;
const maxKnights = 12;
var chessBoard = init(boardSize);


// Create chessboard, set default values
function init(boardSize) {

    var board = Array.from(Array(boardSize), () => new Array(boardSize));
    board.forEach(x => {
        var i = 0;
        while(i < boardSize) {
            x[i] = 0;
            i++;
        }
    });

    return board;
}

function placeKnight(x,y) {
    chessBoard[x][y]++;
    chessBoard[x+2][y+1]++;
    chessBoard[x+2][y-1]++;
    chessBoard[x+1][y+2]++;
    chessBoard[x-1][y+2]++; 
    chessBoard[x-2][y+1]++;
    chessBoard[x-2][y-1]++; 
    chessBoard[x+1][y-2]++;
    chessBoard[x-1][y-2]++;       
};

placeKnight(3,3);




console.table(chessBoard);
