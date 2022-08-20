const Board = require("./knights-travails");
 
// console.log(knightMoves([3,3],[3,3]));
// knightMoves([3,3],[2.5])
const board = new Board;
const Tree = board.BestMove([3,3],[3,7])
// console.log(Tree)
// console.log(Tree.tree)
// console.log(Tree.tree.UL)
// console.log(Tree.tree.UL.UL)


//goal
// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]


