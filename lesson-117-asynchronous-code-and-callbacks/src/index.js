const letters = ['a', 'b', 'c']; 
letters.forEach((v) => {
    console.log("The current letter is ", v); 
}); 


console.log("1"); 
setTimeout(() => {
    console.log("2"); 
}, 1000);
console.log("3"); 


function startLoop(fnToRun) {

    let count = 0; 
    const interval = setInterval(() => {
        count = count +1; 
        if (count === 10){
            console.log("has run 10 times, stopping interval");
            clearInterval(interval);
        }
        fnToRun(); 
    }, 1000);
     
}


// startLoop(() => console.log("hello!")); 


// startLoop(() => {
//     console.log("Hiya"); 
//     console.log("world"); 
//     console.log("foobar"); 
// }); 



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

startLoop2((count) => {
    if (count <10) {
        console.log("The number is ", count); 
    }else {
        console.log("I've had enough, i'm exiting!"); 
        return true; 
    }
}); 