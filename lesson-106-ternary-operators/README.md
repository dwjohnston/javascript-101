# Ternary Operators

Ternary operators are simple short-hand for an if/else statement. 

That is, where you might want to do something like this: 


```javascript


function takesANumber(num) {
    let numberType; 
    if (num %2 ===0) {
        numberType = 'even'; 
    } else {
        numberType = 'odd'; 
    }
}

```

You can use a _ternary_ operator instead: 


```javascript
const numberType = num % 2 === 0 ? 'even' : 'odd'; 
```

The way I read this, is that the question mark is asking a question. 

> "Number is divisible by two? If so 'even', otherwise 'odd'. 

The colon (`:`) separates the 'if so' and 'else' condition. 


## Exercise 

- Navigate to this directory (`lesson-106-ternary-operators`) in your terminal. 
- Install required dependencies with `yarn`.
- Start the tests running with `yarn start` (or `yarn start:windows` if you are using Windows). 
- Implement the functions in `src/exercise.js` such that the tests pass. You can examine the tests  in `src/exercise.test.js` to see what the functions should do. 


 

