const Board = require("./knights-travails");
const centerPos = [3,3]; 

const board = new Board;
board.build(centerPos);

console.log(board.root.pos);
console.log(board.root.UL.pos);
console.log(board.root.UL.UL.pos);

//goal
// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]