
import {handleGameTick} from "./exercise";
import { setCell, createMatrix} from "node-cli-character-matrix";

describe('handleGameTick', () => {
  it('does what is expected', () => {


    const step0 = createMatrix(10,10);
    const step1 = setCell(createMatrix(10,10), 0, 0, 'X'); 
    const step2 = setCell(createMatrix(10,10), 1, 0, 'X'); 
    const step10 = setCell(createMatrix(10,10), 9, 0, 'X'); 
    const step11 = setCell(createMatrix(10,10), 9, 1, 'X'); 
    const step12 = setCell(createMatrix(10,10), 8, 2, 'X'); 

    const exitFn = jest.fn(); 

    expect(handleGameTick(step0, 0, exitFn)).toEqual(step1);
    expect(handleGameTick(step1, 1, exitFn)).toEqual(step2);

    expect(handleGameTick(step10, 10, exitFn)).toEqual(step11);
    expect(handleGameTick(step11, 11, exitFn)).toEqual(step12);

  });
});

