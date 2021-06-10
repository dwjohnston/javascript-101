const { getFirstElement, getSecondElement, getLastElement, getPieceAtPosition, createUsersFromUserNames, doesArrayContainNegativeNumbers, areAllNumbersGreaterThanTwenty } = require("./exercise");

describe ("getFirstElement", () => {
    it("does what is expected", () => {

        const array = ['foo', 'bar', 'biz']; 

        const result = getFirstElement(array); 
        expect (result).toBe('foo');
    }); 
}); 


describe ("getSecondElement", () => {
    it("does what is expected", () => {

        const array = ['foo', 'bar', 'biz']; 

        const result = getSecondElement(array); 
        expect (result).toBe('bar');
    }); 
}); 


describe ("getLastElement", () => {
    it("does what is expected", () => {

        const array = ['foo', 'bar', 'biz']; 

        const result = getLastElement(array); 
        expect (result).toBe('biz');

        expect(getLastElement(['a','b','c','d'])).toBe('d');
    }); 
}); 



describe ("createArray", () => {
    it("does what is expected", () => {

        const result = createArray(1, 2, 'foo'); 

        expect(result).toEqual([1,2,'foo']
    }); 
}); 




describe ("getPieceAtPosition", () => {
    it("does what is expected", () => {

        // N for 'kNight'. 
        const board = [
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], 
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            [null, null, null, null, null, null, null, null, ]
            [null, null, null, null, null, null, null, null, ]
            [null, null, null, null, null, null, null, null, ]
            [null, null, null, null, null, null, null, null, ]
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], 
        ];
        expect (getPieceAtPosition(board, 0, 0)).toBe('R');
        expect (getPieceAtPosition(board, 0, 4)).toBe('Q');
        expect (getPieceAtPosition(board, 1, 4)).toBe('P');
        expect (getPieceAtPosition(board, 2, 4)).toBe(null);
        expect (getPieceAtPosition(board, 7, 7)).toBe('N');
    }); 
}); 



describe ("mergeArrays", () => {
    it("does what is expected", () => {

        const result = mergeArrays(['andy', 'alice', 'bob'], ['joan', 'george', 'jill'])

        expect(result).toEqual(['andy', 'alice', 'bob', 'joan', 'george', 'jill']);
    }); 
}); 


describe ("createUsersFromUsernames", () => {
    it("does what is expected", () => {

        const userNames = [
            'alice', 
            'brody', 
            'celine'
        ]; 


        const result = createUsersFromUserNames(userNames); 

        expect(result).toEqual([
            {
                name: "alice",
            }, {
                name: "brody", 
            }, 
            {
                name: "celine"
            }
        ]);
       
    }); 
}); 


describe ("findNumbersLargerThanTen", () => {
    it("does what is expected", () => {

        const result = findNumbersLargerThanTen([1,2, -10, -100, 100, 101]); 
        expect(result).toEqual([100, 101]);
    }); 
}); 

describe ("doesArrayContainNegativeNumbers", () => {
    it("does what is expected", () => {

        expect(doesArrayContainNegativeNumbers([1,2, -10, -100, 100, 101])).toBe(true); 
        expect(doesArrayContainNegativeNumbers([1,2, 100, 101])).toBe(false); 

    }); 
}); 



describe ("areAllNumbersGreaterThanTwenty", () => {
    it("does what is expected", () => {

        expect(areAllNumbersGreaterThanTwenty([1,2, -10, -100, 100, 101])).toBe(false); 
        expect(areAllNumbersGreaterThanTwenty([1,2, 100, 101])).toBe(false); 
        expect(areAllNumbersGreaterThanTwenty([10002, 100, 101])).toBe(true); 


    }); 
}); 


