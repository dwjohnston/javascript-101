
jest.useFakeTimers('legacy');


describe('singNinetyNineBottlesOfBeer', () => {


  it('does what is expected', () => {


      const {createSingleNinetyNineBottles} = require ("./exercise");

        const fakeLog = jest.fn(); 
        fakeLog.mockImplementation((...args) => {
          console.log(...args); 
        }); 

        const singAll = createSingleNinetyNineBottles(fakeLog);
    

        singAll();
        jest.runAllTimers();
        expect(setInterval).toHaveBeenCalledTimes(1); 


        expect(fakeLog).toHaveBeenNthCalledWith(1, "99 bottles of beer on the wall, 99 bottles of beer! Take one down and pass it around, 98 bottles of beer on the wall.");
        expect(fakeLog).toHaveBeenNthCalledWith(2, "98 bottles of beer on the wall, 98 bottles of beer! Take one down and pass it around, 97 bottles of beer on the wall.");
        expect(fakeLog).toHaveBeenNthCalledWith(99, "1 bottles of beer on the wall, 1 bottles of beer! Take one down and pass it around, 0 bottles of beer on the wall.");
        expect(fakeLog).toHaveBeenCalledTimes(99);


  });
});

