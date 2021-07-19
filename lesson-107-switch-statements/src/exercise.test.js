
import { addVector, getDirection, moveCharacter } from "./exercise";

describe("addVector", () => {
  it("does what is expected", () => {
      expect(addVector({x:1, y:1}, {x:-2, y:-2})).toEqual({x:-1, y:-1});
  }); 
}); 

describe ("moveCharacter", () => {
    it ("does what is expected", () => {
      expect (moveCharacter({x: 0, y:0}, "north")).toEqual({x:0, y: 1}); 
      expect (moveCharacter({x: 0, y:1}, "north")).toEqual({x:0, y: 2}); 
      expect (moveCharacter({x: 0, y:2}, "halt")).toEqual({x:0, y: 2}); 
      expect (moveCharacter({x: 0, y:2}, "east")).toEqual({x:1, y: 2}); 
      expect (moveCharacter({x: 1, y:2}, "east")).toEqual({x:2, y: 2}); 
      expect (moveCharacter({x: 2, y:2}, "south")).toEqual({x:2, y: 1}); 
      expect (moveCharacter({x: 2, y:1}, "west")).toEqual({x:1, y: 1}); 
    })
}); 