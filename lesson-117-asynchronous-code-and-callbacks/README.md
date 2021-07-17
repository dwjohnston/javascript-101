# Lesson 117 - Asynchronous Code and Callbacks

## Exercise 

- Run `yarn` to install dependencies
- Run `yarn dev` to see how all the code examples in this lesson (`src/index.js`) run. 


A callback is a function that is defined in one part of your application, but is passed (typically as a function argument) to another part of the application where it is called. 

We've actually already used callbacks already in our arrays lesson, where we did things like this: 

```javascript
const letters = ['a', 'b', 'c']; 
letters.forEach((v) => {
    console.log("The current letter is ", v); 
}); 
```

In the case of the Array.prototype functions, we see the result of our callback immediately, so in lesson I want to explore more advanced usage of callbacks. 

## Asynchronous code

Asynchronous code is code where the code doesn't necessarily executing in the order it is written. Typically it involves some amount of idling time, while the program waits for something to complete. 

A common use case is that you may want to fetch some data from the server, which will take say 250ms, and _then_ do something with that data. That data isn't available immediately. In the meantime your program can still be continuing running other things. 

A simple example of some asynchronous code is the [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) method, which will execute some code after waiting a certain amount of time.  

```javascript
console.log("1"); 
setTimeout(() => {
    console.log("2"); 
}, 1000);
console.log("3"); 
```

Note if you run this, it will print 

```
1
3
```

Followed by a wait, and then 

```
2 
```

appears, before the program finally exits. 

The `setTimeout` function takes two arguments: 

- The first is the _callback_ this is the code we want to execute after waiting. 
- The second is _amount to wait_ before executing the code. 


## setInterval 

I'm going to write a bit of code that uses the `setInterval` function. 

`setInterval` is similar to `setTimeout` except instead of waiting and executing just once, it keeps executing after each wait time. 

The `clearInterval` function can be used to stop the loop executing. 

```javascript

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

startLoop(() => console.log("hello!")); 
```


Now that `fnToRun` is a callback parameter (`fn` is just an abbreviation of `function`). 

The neat thing about callback parameters is that we can use them to _execute any code we want_. 

```javascript
startLoop(() => {
    console.log("hello"); 
    console.log("world"); 
    console.log("foobar"); 
}); 
```

Note though, that if you run both start loops at the same time, the logs will all be interlaced, this can be one of the challenges of asynchronous code. 

```
hello!
Hiya
world
foobar
hello!
Hiya
world
foobar
hello!
Hiya
world
foobar
...etc
```

## Making our loop a bit more advanced

I'm going to make a couple of adjustments to that start loop function, that will make it a bit more useable. 

```javascript
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
```

Now, the callback function you pass in has a couple of extra options: 

- The first _paramater_ of the function is the count of interval (ie, 0 then 1, 2, 3 etc). 
- The _return_ value of the function, if true will stop the interval.

Also, I added `interval` as an optional second parameter of the `startLoop2` function, so we can control how quickly the interval fires. 

```javascript

startLoop2((count) => {
    if (count <10) {
        console.log("The number is ", count); 
    }else {
        console.log("I've had enough, i'm exiting!"); 
        return true; 
    }
}); 

```

```
The number is  0
The number is  1
The number is  2
The number is  3
The number is  4
The number is  5
The number is  6
The number is  7
The number is  8
The number is  9
I've had enough, i'm exiting!
```


## Exercise

Implement the function to sing the song '99 bottles of beer', using the `startLoop2` function. 

Note, you _do not_ need to worry about dealing with the lack of pluralisation on '1 bottle of beer' - '1 bottles of beer' is fine. 

Remember to provide an end case to stop the interval! (return true from the callback when you want to stop). 

Additional, don't use `console.log` to output the lines of the song - use the provided `singFn` - (this is for testing purposes, it's a pattern called dependency injection).

- Navigate to this directory (`lesson-117-asynchronous-code-and-callbacks`) in your terminal. 
- Install required dependencies with `yarn`.
- Start the tests running with `yarn start` (or `yarn start:windows` if you are using Windows). 
- Implement the functions in `src/exercise.js` such that the tests pass. You can examine the tests  in `src/exercise.test.js` to see what the functions should do. 


 

