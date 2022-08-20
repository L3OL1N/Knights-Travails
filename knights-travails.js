class Board{
    constructor(){
        this.root = null;
    }
    build(pos=[null,null]){
        if(!this.root){
            this.root = new Knight(pos);
            }
            for(let el in this.root){
                if(el != "pos"){
                    this.root[el] = new Knight([pos[0]+1,pos[1]+1])
                }
            }
    }
    
    // BestMove(end,count = 0){
    //     if(queue.length < 0){
    //         return {Count:100};
    //     }
    //     let cur = queue.shift();
    //         if(checkVisted(cur,moves)){
    //             moves.move.push(cur);
    //             if(arrayIsEqual(cur,end)) return {Count:count};
    //             for(let next of Next(cur)){
    //                 if(checkVisted(next,moves)){
    //                     queue.push(next);
    //                 }
    //             }
    //             console.log(queue);
    //             let result = BestMove(end,count++)
    //             console.log(result);
    //             bestMoves.push(result);
    //             return bestMoves[1];
    //         }
    // }
}
class Knight{
    constructor(pos){
        this.pos = pos;
        this.UL = null;
        this.UR = null;
    }
}
   
    // // while(queue.length > 0){
    // //     let cur = queue.shift();
    // //     if(checkVisted(cur,moves)){
    // //         moves.push(cur);
    // //         if(arrayIsEqual(cur,end)) return moves;
    // //         for(let next of Next(cur)){
    // //             if(checkVisted(next,moves)){
    // //                 queue.push(next);
    // //             }
    // //         } 
    // //     }
    // // }
    // return moves.move;



function checkOutBoard(pos=[]){
    return pos.every(val=>val >= 0 && val <=7);
}
function arrayIsEqual(arr1,arr2){
    return arr1.every((val,index)=>val == arr2[index])
}
function checkVisted(pos,moves){
    for(let el of moves.move){
        if(arrayIsEqual(pos,el)) return false
    }
    return true
}
function Next(pos){
    const cur = pos;
    const next = [];
    //UL
    pos = [cur[0]-1,cur[1]+2];
    if(checkOutBoard(pos)) next.push(pos);
    //UR
    pos = [cur[0]+1,cur[1]+2];
    if(checkOutBoard(pos)) next.push(pos);
    //RU
    pos = [cur[0]+2,cur[1]+1];
    if(checkOutBoard(pos)) next.push(pos);
    //RD
    pos = [cur[0]+2,cur[1]-1];
    if(checkOutBoard(pos)) next.push(pos);
    //DR
    pos = [cur[0]+1,cur[1]-2];
    if(checkOutBoard(pos)) next.push(pos);
    //DL
    pos = [cur[0]-1,cur[1]-2];
    if(checkOutBoard(pos)) next.push(pos);
    //LD
    pos = [cur[0]-2,cur[1]-1];
    if(checkOutBoard(pos)) next.push(pos);
    //LU
    pos = [cur[0]-2,cur[1]+1];
    if(checkOutBoard(pos)) next.push(pos);
    return next;
}
module.exports = Board;