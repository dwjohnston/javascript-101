import { fizzBuzz, printNumbersOneToTwenty } from "."


describe ("printNumbersOneToTwenty", () => {
    it("does the things", () => {

        const realLog = console.log; 
        const mockLog = jest.fn();
        mockLog.mockImplementation((...args) => realLog(...args)); 
        console.log = mockLog; 

        printNumbersOneToTwenty(); 

        // Note that counterintuitively, the `toHaveBeenNthCalledWith` function is indexed at 1. D:
        expect(mockLog).toHaveBeenNthCalledWith(1,0); // The first call of mockLock will be '0'
        expect(mockLog).toHaveBeenNthCalledWith(2,1); 
        expect(mockLog).toHaveBeenNthCalledWith(3,2); 
        expect(mockLog).toHaveBeenNthCalledWith(4,3); 
        expect(mockLog).toHaveBeenNthCalledWith(20,19); // The twentieth call of mockLock will be '19'

}); 

describe("FizzBuzz", ()=> {
    it("does the things", () => {

        const realLog = console.log; 
        const mockLog = jest.fn();
        mockLog.mockImplementation((...args) => realLog(...args)); 
        console.log = mockLog; 

        fizzBuzz(); 

        expect(mockLog).toHaveBeenNthCalledWith(1,1); 
        expect(mockLog).toHaveBeenNthCalledWith(2, 2); 
        expect(mockLog).toHaveBeenNthCalledWith(3, "Fizz"); 
        expect(mockLog).toHaveBeenNthCalledWith(4, 4); 
        expect(mockLog).toHaveBeenNthCalledWith(5, "Buzz"); 
        expect(mockLog).toHaveBeenNthCalledWith(6, "Fizz"); 
        expect(mockLog).toHaveBeenNthCalledWith(7, 7); 
        expect(mockLog).toHaveBeenNthCalledWith(8, 8); 
        expect(mockLog).toHaveBeenNthCalledWith(9, "Fizz"); 
        expect(mockLog).toHaveBeenNthCalledWith(10, "Buzz"); 
        expect(mockLog).toHaveBeenNthCalledWith(11, 11); 
        expect(mockLog).toHaveBeenNthCalledWith(12, "Fizz"); 
        expect(mockLog).toHaveBeenNthCalledWith(13, 13); 
        expect(mockLog).toHaveBeenNthCalledWith(14, 14); 
        expect(mockLog).toHaveBeenNthCalledWith(15, "FizzBuzz"); 
        expect(mockLog).toHaveBeenNthCalledWith(16, 16); 
        expect(mockLog).toHaveBeenNthCalledWith(17, 17); 
        expect(mockLog).toHaveBeenNthCalledWith(18, "Fizz"); 
        expect(mockLog).toHaveBeenNthCalledWith(19, 19); 
        expect(mockLog).toHaveBeenNthCalledWith(20, "Buzz"); 

    })
})