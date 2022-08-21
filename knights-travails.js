class Board{
    constructor(){
        this.root = null;
    }
    build(pos=[null,null], limit){
        if(!this.root){
            this.root = new Knight(pos);
        }
        function Next(pos, node, limit, level = 0){
            level++;
            if(level > limit) return;
            for(let el in node){
                if(el != "pos"){
                    let nextPos = NextPos(el,pos)
                    if(nextPos){
                        node[el] = new Knight(nextPos)
                        Next(node[el].pos, node[el], limit, level)
                    }
                }
            }
        }
        Next(pos, this.root, limit);   
    }

    BestMove(start,end){
        const moves = [];
        const Tree = {};
        if(arrayIsEqual(start,end)){
            moves.push(start)
            return moves; 
        } 
        for(let i = 1; i < 4;i++){
            Tree.level = i;
            this.build(start,i)
            Tree.tree = this.root;
            const last = findLast(Tree.tree, i);
            if(checkContain(end,last)){
                DFS(end, moves, Tree.tree , Tree.level)
                return moves;
            };
        }
        return Tree;
    }

}
class Knight{
    constructor(pos){
        this.pos = pos;
        this.UL = null;
        this.UR = null;
        this.RU = null;
        this.RD = null;
        this.DR = null;
        this.DL = null;
        this.LD = null;
        this.LU = null;
    }
}

function checkOutBoard(pos=[]){
    return pos.every(val=>val >= 0 && val <=7);
}
function arrayIsEqual(arr1,arr2){
    return arr1.every((val,index)=>val == arr2[index])
}
function checkContain(pos,arr){
    for(let el of arr){
        if(arrayIsEqual(pos,el)) return true;
    }
    return false;
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
function NextPos(el,pos){
    let nextPos =[];
    switch(el){
        case "UL":{
            nextPos = [pos[0]-1,pos[1]+2];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "UR":{
            nextPos = [pos[0]+1,pos[1]+2];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "RU":{
            nextPos = [pos[0]+2,pos[1]+1];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "RD":{
            nextPos = [pos[0]+2,pos[1]-1];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "DR":{
            nextPos = [pos[0]+1,pos[1]-2];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "DL":{
            nextPos = [pos[0]-1,pos[1]-2];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "LD":{
            nextPos = [pos[0]-2,pos[1]-1];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        case "LU":{
            nextPos = [pos[0]-2,pos[1]+1];
            if(checkOutBoard(nextPos)){
                return nextPos;
            }
            break;
        }
        default:
            console.log("Error");
    }
    return null;
}
function findLast(tree, level){
    const last = [];
    if(checkNull(tree)) {
        return tree.pos;
    }
    for(let el in tree){
        if(el != "pos" && tree[el]){
           last.push(findLast(tree[el]));
        }
    }
    return last.flat(level-1);
}
function checkNull(tree){
    for(let el in tree){
        if(el != "pos"){
            if(tree[el]) return false;
        }
    }
    return true;
}
function DFS(end, moves, tree, level, depth = 0){
    depth++;
    // console.log(moves)
    if(depth > level+1) return;
    if(arrayIsEqual(tree.pos,end)) return moves.push(tree.pos);
    if(checkNull(tree)) return ;
    moves.push(tree.pos);
    
    for(let el in tree){
        if(el != "pos" && tree[el]){
            if(arrayIsEqual(end,moves[moves.length-1])) return;
            DFS(end,moves,tree[el],level,depth);
        }
    }
    if(!arrayIsEqual(end,moves[moves.length-1])) moves.pop();
    return moves;
}
module.exports = Board;