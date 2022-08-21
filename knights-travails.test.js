const Board = require("./knights-travails");
describe("#not move",()=>{
    test("same",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[3,3])

        expect(moves).toStrictEqual([[3,3]])
    })
})
describe("#move 1 step",()=>{
    test("1 step UL",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[2,5])

        expect(moves).toStrictEqual([[3,3],[2,5]])
    })
    test("1 step UR",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[4,5])

        expect(moves).toStrictEqual([[3,3],[4,5]])
    })
    test("1 step RU",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[5,4])

        expect(moves).toStrictEqual([[3,3],[5,4]])
    })
    test("1 step RD",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[5,2])

        expect(moves).toStrictEqual([[3,3],[5,2]])
    })
    test("1 step DR",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[4,1])

        expect(moves).toStrictEqual([[3,3],[4,1]])
    })
    test("1 step DL",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[2,1])

        expect(moves).toStrictEqual([[3,3],[2,1]])
    })
    test("1 step LD",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[1,2])

        expect(moves).toStrictEqual([[3,3],[1,2]])
    })
    test("1 step LU",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[1,4])

        expect(moves).toStrictEqual([[3,3],[1,4]])
    })
})
describe("#move 2 step",()=>{
    test("UL -> UL",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[1,7])

        expect(moves).toStrictEqual([[3,3],[2,5],[1,7]])
    })
    test("UL -> UR",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[3,7])

        expect(moves).toStrictEqual([[3,3],[2,5],[3,7]])
    })
    test("UR -> UR",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[5,7])

        expect(moves).toStrictEqual([[3,3],[4,5],[5,7]])
    })
    test("UR -> UL",()=>{
        const board = new Board;
        const moves = board.BestMove([3,3],[3,7])

        expect(moves).toStrictEqual([[3,3],[2,5],[3,7]])
    })

})
