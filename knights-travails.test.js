const knightMoves = require("./knights-travails");
describe("#not move",()=>{
    test("same",()=>{
        const moves = knightMoves([3,3],[3,3])

        expect(moves).toStrictEqual([[3,3]])
    })
})
describe("#move 1 step",()=>{
    test("1 step UL",()=>{
        const moves = knightMoves([3,3],[2,5])

        expect(moves).toStrictEqual([[3,3],[2,5]])
    })
    test("1 step UR",()=>{
        const moves = knightMoves([3,3],[4.5])

        expect(moves).toStrictEqual([[3,3],[4,5]])
    })
    test("1 step RU",()=>{
        const moves = knightMoves([3,3],[5,4])

        expect(moves).toStrictEqual([[3,3],[5,4]])
    })
    test("1 step RD",()=>{
        const moves = knightMoves([3,3],[5,2])

        expect(moves).toStrictEqual([[3,3],[5,2]])
    })
    test("1 step DR",()=>{
        const moves = knightMoves([3,3],[4,1])

        expect(moves).toStrictEqual([[3,3],[4,1]])
    })
    test("1 step DL",()=>{
        const moves = knightMoves([3,3],[2,1])

        expect(moves).toStrictEqual([[3,3],[2,1]])
    })
    test("1 step LD",()=>{
        const moves = knightMoves([3,3],[1,2])

        expect(moves).toStrictEqual([[3,3],[1,2]])
    })
    test("1 step LU",()=>{
        const moves = knightMoves([3,3],[1,4])

        expect(moves).toStrictEqual([[3,3],[1,4]])
    })
})