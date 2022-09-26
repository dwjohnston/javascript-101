import { printEverySecondItem, printEveryItem, printEveryItemPrefixed, printWithSpecialLabels, timesValuesBy10, createValuesObjectsFromNumbers, createValueObjectsWithSpecialProperties } from "./index";

jest.mock("console"); 




beforeEach(()=> {

    jest.clearAllMocks();
}); 


// This test passes without you having to do anything, 
// Just to show you how the tests work. 
describe(printEveryItem, () => {
    it("prints every item", () => {

        const logSpy = jest.spyOn(console, 'log');

        printEveryItem(["a", "b", "d"]); 

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenNthCalledWith(1, "a"); 
        expect(logSpy).toHaveBeenNthCalledWith(2, "b"); 
        expect(logSpy).toHaveBeenNthCalledWith(3, "d"); 


        

        
    }); 
}); 

describe(printEveryItemPrefixed, () => {
    it("prints every item, with the prefix", () => {

        const logSpy = jest.spyOn(console, 'log');

        printEveryItemPrefixed("the number:", ["a", "b", "d"]); 

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenNthCalledWith(1, "the number:a"); 
        expect(logSpy).toHaveBeenNthCalledWith(2, "the number:b"); 
        expect(logSpy).toHaveBeenNthCalledWith(3, "the number:d"); 


        
    }); 
}); 

describe(printEverySecondItem, () => {
    it("prints every second item", () => {

        const logSpy = jest.spyOn(console, 'log');

        printEverySecondItem(["a", "b", "d", "h", "9"]); 

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenNthCalledWith(1, "b"); 
        expect(logSpy).toHaveBeenNthCalledWith(2, "h"); 


        
    }); 
}); 

describe(printWithSpecialLabels, () => {


    it("prints every item, with special labels ", () => {
        const logSpy = jest.spyOn(console, 'log');

        printWithSpecialLabels(["a", "b", "c"]); 
    
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenNthCalledWith(1, "head:a"); 
        expect(logSpy).toHaveBeenNthCalledWith(2, "value:b"); 
        expect(logSpy).toHaveBeenNthCalledWith(3, "tail:c");
    })


}); 


// This test is already solved
describe(timesValuesBy10, () => {

    it("returns an array with the values multiplied by 10", () => {
        const result = timesValuesBy10([1, 2, 3]); 
        expect(result).toEqual([10, 20, 30]);
    }); 


}); 

describe(createValuesObjectsFromNumbers, () => {

    it("Returns an array of objects with correct values", () => {
        const result = createValuesObjectsFromNumbers([1, 2, 3]); 
        expect(result).toEqual([{
            value: 1, 
        },
        {
            value: 2, 
        },
        {
            value: 3, 
        },]);
    }); 


}); 


describe (createValueObjectsWithSpecialProperties, () => {
    it("Returns an array of objects with correct values", () => {
        const result = createValueObjectsWithSpecialProperties([1, 2, 3]); 
        expect(result).toEqual([{
            value: 1, 
            isHead: true, 
            isTail: false, 
        },
        {
            value: 2, 
            isHead: false, 
            isTail: false, 
        },
        {
            value: 3, 
            isHead: false, 
            isTail: false, 
        },]);
    }); 

}); 