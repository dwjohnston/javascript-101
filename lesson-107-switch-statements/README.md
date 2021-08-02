# Switch Statements

Switch statements are similar to 'if/else' statements, but are a bit more readable and convenient. 


For example say you've got something like: 


```javascript
function doSomethingToValue(value, action) {

    if (action === "increase-a-little") {
        return value + 1; 
    }
    else if (action === "increase-a-lot") {
        return value + 10; 
    }
    else if (action === "stay-the-same") {
        return value;
    }
    else if (action === "decrease-a-little") {
        return value -1; 
    }
    else if (action === "decrease-a-lot") {
        return value -10; 
    }    
}
```

We can do this, it's fine, but a switch statement is a bit more readable: 

```javascript
function doSomethingToValue2(value, action) {

    switch(action) {
        case "increase-a-little": {
            return value +1; 
        }
         case "increase-a-lot": {
            return value +10; 
        }
         case "stay-the-same": {
            return value; 
        }
         case "decrease-a-little": {
            return value -1; 
        }
         case "decrease-a-lot": {
            return value -10; 
        }

        // It's always good to have a default case - this condition will occur if none of the others do
        default : {
            return value; 
        }

    }

```


I will also mention that switch statements are one of the few places where I think `let` statements are ok. Basically the combination of the let statement and the  switch statement are behaving like the ternary operator does - where you are determining the value of the variable according to some conditions.  

That is you might do something like: 


```javascript
    let valueChangeAmount; 
    switch(action) {
        case "increase-a-little": {
            valueChangeAmount = 1; 
        }
         case "increase-a-lot": {
            valueChangeAmount = 10; 
        }
         case "stay-the-same": {
            valueChangeAmount = 0; 
        }
         case "decrease-a-little": {
            valueChangeAmount = -1; 
        }
         case "decrease-a-lot": {
            valueChangeAmount = -10; 
        }
        default : {
            valueChangeAmount =0;
        }
    }
```


## Exercise 

- Navigate to this directory (`lesson-107-switch-statements`) in your terminal. 
- Install required dependencies with `yarn`.
- Start the tests running with `yarn start` (or `yarn start:windows` if you are using Windows). 
- Implement the functions in `src/exercise.js` such that the tests pass. You can examine the tests  in `src/exercise.test.js` to see what the functions should do. 


 

