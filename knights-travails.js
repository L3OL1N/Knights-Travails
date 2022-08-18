class Board{
    constructor(){
        this.root = null;
    }
    build(pos=[null,null]){
        if(!this.root){
            this.root = new Knight(pos);
        }
        function Next(pos,move){
            pos = [pos[0]-1,pos[1]+2];
            if(pos[0] < 0 || pos[1] > 7) return;
            if(!move.UL){
                move.UL = new Knight(pos);
                Next(pos,move.UL)
                return;
            }
        }
        return Next(pos,this.root);
    }
}
class Knight{
    constructor(pos,nextPos,UL){
        this.pos = pos;
        this.nextPos = nextPos;
        this.UL = UL;
    }
}

// knightMoves(start,end){
//     moves = [start]
//     pos = board.find(start);
//      if pos == end return moves.push(end)

//     LOOP{ 
//     pos = pos.nextMove
//     moves.push(pos)
//     if pos == end return moves.push(end)
//     }

// }

module.exports = Board;