# The Math library

In this lesson we are going to introduce a built in library called `Math`. It, as the name implies, provides functions relating to mathematics. 

Remember in earlier lessons we talked briefly about object functions (functions that exist on an object), as well as prototype functions (functions that exist on the object's prototype). 

The functions we are using today are technically _static class methods_. This doesn't matter, I just mention it for posterity. In fact, we haven't even talked about classes, and we're not planning to. 

What it means is that we don't reference the function directly, like we would with an ordinary function, nor do we reference an object. Instead we reference the `Math` class.  


```javascript

function myFunction() {

}

myFunction(); // Direct reference to a function 


const someObject = {
    fn: () => {
        console.log("hello world!"); 
    }
}

someObject.fn(); // Referencing an object function

const myArray = []; 
myArray.forEach(() => ); // Referencing an object's prototype function 


const randomNumber = Math.random(); // Referencing a static class method. 

```

## The Math functions 

You can see the full list of Math functions here: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

You can see that functions to calculate sine, squareroot, logarithms are there. Very useful stuff. 

We won't cover those here, but we will cover some others. 


### Math.random()

`Math.random()` generates a random number between 0 and 1. Easy. 

### Math.floor() 

`Math.floor` _rounds down_ a number to _the nearest integer_. 

This is helpful for doing integer arithmetic, for example

```javascript
console.log(5/2); //2.5
```

Which is often not what we want. 

Instead we would do: 


```javascript
console.log(Math.floor(5/2)); 
```

`Math.ceil` is similar, but rounds upward. 

`Math.round` is similar, but rounds to the nearest integer, not the next lowest. 

`Math.trunc` is similar - but for negative numbers it will round _up_. 

ie: 

```javascript 
console.log(Math.floor(-25.5)); //-26; 
console.log(Math.trunc(-25.5)); //-25; 
```

## Rounding to decimal places

So often in javascript, if we're dealing with fractions they're going to have an annoyingly long number of decimal places: 

```javascript
console.log(10/3); //3.3333333333333335
```

There isn't a native way to round to a number of decimal places, so here's the next practical lesson for programming. 

### Googling stuff

In this case, I'm googling ["round to 2 decimal places javascript"](https://www.google.com/search?q=round+to+2+decimal+places.+javascript&oq=round+to+2+decimal+places.+javascript), the top result is [this question from Stack Overflow](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary).

If you haven't already, create an account and upvote the question. 

So the technique they suggest is to do: 

```javascript
Math.round(num * 100) / 100
```

So what's happening here is that we first time the the number by 100, and then we round it (to make it a integer), we then divide it by 100 again, and that number of course will only ever have 2 dp. 



## Exercise 

- Navigate to this directory (`lesson-108-the-math-library`) in your terminal. 
- Install required dependencies with `yarn`.
- Start the tests running with `yarn start` (or `yarn start:windows` if you are using Windows). 
- Implement the functions in `src/exercise.js` such that the tests pass. You can examine the tests  in `src/exercise.test.js` to see what the functions should do. 


 

