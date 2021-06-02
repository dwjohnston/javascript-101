import { addTwoNumbers, areValuesEqual, getLargestNumber, isNumberDivisibleBy5, isNumberEven, isStringDavid, squareNumber, thisFunctionReturnsTrue } from "./index";


// This test passes without you having to do anything, 
// Just to show you how the tests work. 
describe ("This is an example test", ()=> {
    it ("This test passes!", () => {
        const result = thisFunctionReturnsTrue(); 
        expect(result).toBe(true);
    }); 
}); 

// This one already works. 
describe("addTwoNumbers", ()=> {
    it ("Does what's expected", () => {

        expect(addTwoNumbers(1,1)).toBe(2); 
        expect(addTwoNumbers(10, 3)).toBe(13);
        expect(addTwoNumbers(10, -1)).toBe(9);
    }); 
}); 


describe("squareNumber", () => {
    it ("does what is expected", () => {
        expect(squareNumber(2)).toBe(4); 
        expect(squareNumber(-3)).toBe(9); 
    }); 
}); 


describe("isNumberEven", () => {
    it ("does what is expected", () => {
        expect(isNumberEven(2)).toBe(true); 
        expect(isNumberEven(3)).toBe(false); 
    }); 
}); 


describe("isNumberEven", () => {
    it ("does what is expected", () => {
        expect(isNumberDivisibleBy5(5)).toBe(true); 
        expect(isNumberDivisibleBy5(10)).toBe(true); 
        expect(isNumberDivisibleBy5(11)).toBe(false); 

    }); 
}); 

describe("getLargestNumber", () => {
    it ("does what is expected", () => {
        expect(getLargestNumber(2, 3)).toBe(3); 
        expect(getLargestNumber(3, 2)).toBe(3); 
        expect(getLargestNumber(3, 3)).toBe(3); 

    }); 
}); 

describe("isStringDavid", () => {
    it ("does what is expected", () => {
        expect(isStringDavid("David")).toBe(true); 
        expect(isStringDavid("David ")).toBe(false); 
        expect(isStringDavid("david")).toBe(false);
        expect(isStringDavid("asdasd")).toBe(false);
    }); 
}); 

describe("areValuesEqual", () => {
    it ("does what is expected", () => {
        expect(areValuesEqual("a", "a")).toBe(true); 
        expect(areValuesEqual("a", "b")).toBe(false); 
        expect(areValuesEqual(0, '')).toBe(false); 
        expect(areValuesEqual(0, false)).toBe(false); 


    }); 
}); 



// Tests for functions where you need to 