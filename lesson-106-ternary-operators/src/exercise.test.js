
import { getDirection, moveCharacter } from "./exercise";


describe("getDirection", () => {
  it ("does what is expected", () => {

      expect(getDirection(100)).toBe("north"); 
      expect(getDirection(0)).toBe("north"); 

      expect(getDirection(-50)).toBe("south");

  }); 
}); 


describe ("moveCharacter", () => {
    it ("does what is expected", () => {

      expect (moveCharacter({x: 0, y:0}, "north")).toEqual({x:0, y: 1}); 
      expect (moveCharacter({x: 0, y:1}, "north")).toEqual({x:0, y: 2}); 
      expect (moveCharacter({x: 0, y:2}, "south")).toEqual({x:0, y: 1}); 
    })
}); 