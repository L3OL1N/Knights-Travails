const Board = require("./knights-travails");
 
// console.log(knightMoves([3,3],[3,3]));
// knightMoves([3,3],[2.5])
const board = new Board;
board.build([3,3])

console.log(board.root)
//goal
// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]


// for(let el of moves.move){
//     console.log(el)
// }

// function Next(pos){
//     const cur = pos;
//     const next = [];
//     //UL
//     pos = [cur[0]-1,cur[1]+2];
//     if(checkOutBoard(pos)) next.push(pos);
//     //UR
//     pos = [cur[0]+1,cur[1]+2];
//     if(checkOutBoard(pos)) next.push(pos);
//     //RU
//     pos = [cur[0]+2,cur[1]+1];
//     if(checkOutBoard(pos)) next.push(pos);
//     //RD
//     pos = [cur[0]+2,cur[1]-1];
//     if(checkOutBoard(pos)) next.push(pos);
//     //DR
//     pos = [cur[0]+1,cur[1]-2];
//     if(checkOutBoard(pos)) next.push(pos);
//     //DL
//     pos = [cur[0]-1,cur[1]-2];
//     if(checkOutBoard(pos)) next.push(pos);
//     //LD
//     pos = [cur[0]-2,cur[1]-1];
//     if(checkOutBoard(pos)) next.push(pos);
//     //LU
//     pos = [cur[0]-2,cur[1]+1];
//     if(checkOutBoard(pos)) next.push(pos);
//     return next;
// }
// function checkOutBoard(pos=[]){
//     return pos.every(val=>val >= 0 && val <=7);
// }
// console.log(Next([6,5]))