// Don't touch this.
function startLoop2(fnToRun, intervalMs = 1000) {
    let count = 0; 
    const interval = setInterval(() => {

         const shouldExit = fnToRun(count); 
         count = count +1; 
         if (shouldExit) {
             clearInterval(interval);
         }
    }, intervalMs);     
}


export function singNinetyNineBottlesOfBeer(singFn) {
    //Implement the function here
    singFn("hello world!"); // Example use of the singFn - it works just like console.log
    
}


// Don't touch this. This is for the purposes of testing. 
export function createSingleNinetyNineBottles(logFn){
    return ()=> singNinetyNineBottlesOfBeer(logFn);
}