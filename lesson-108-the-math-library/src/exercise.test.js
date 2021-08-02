
import { generateRandomInteger, generateRandomNumberBetweenZeroAndNine, roundToTwoDecimalPlaces, } from "./exercise";

describe("generateRandomNumberBetweenZeroAndNine", () => {
  it("does what is expected", () => {

      const results = new Array(100).fill().map(() => generateRandomNumberBetweenZeroAndNine()); 

      const validNumbers = new Array(10).fill().map((v,i) => i);

      results.forEach((v) => {
        expect(validNumbers).toContain(v);
      }); 
  }); 
}); 

describe ("generateRandomInteger", () => {
    it ("does what is expected", () => {

      const result1 = generateRandomInteger(0, 1); 
      expect(result1 === 0 || result1 ===1).toBe(true);
      
      new Array(100).fill().forEach(() => {

        
        const result2 = generateRandomInteger(-100, 1); 
        console.log(result2);
        expect(result2 >=  -100 && result2 <= 1).toBe(true);
        expect(Math.abs(result2 %1)).toEqual(0);
      })


      
    })
}); 


describe("roundToTwoDecimalPlaces", () => {

  it ("does what is expected", () => {
    expect(roundToTwoDecimalPlaces(1.00001)).toEqual(1);

    expect(roundToTwoDecimalPlaces(1.9999)).toEqual(2);
  
    expect(roundToTwoDecimalPlaces(1.8999)).toEqual(1.9);
  
    expect(roundToTwoDecimalPlaces(100.30001)).toEqual(100.3);
    expect(roundToTwoDecimalPlaces(100.31501)).toEqual(100.32);
  })


}); 