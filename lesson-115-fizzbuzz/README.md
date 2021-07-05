# FizzBuzz 

FizzBuzz is a famous interview question. 

It is not a particularly difficult challenge - but it does sort out 'can this person code at all'. 

There's good news! If you can do this challenge then you are a good enough programmer to pass the first stage of some coding interview tests!

## The Challenge

> Write a program that will print the numbers from 1-20. 
> If a number is a multiple of 3 print 'Fizz' instead.  
> If a number is a multiple of 5 print 'Buzz' instead. 
> If a number is both a multiple of 3 and 5, print 'FizzBuzz' instead. 


## Additional info

Because I haven't taught you for loops, you need to know how to generate a list of numbers using a functional style. 

The technique is this: 

``` javascript
new Array(20).fill(true).forEach((v,i) => {
    console.log(i); 
}); 
```

What's happening here is: 


`new Array(20)`

Creates an array of length 20. However, the array is empty, each of it's elements aren't even `undefined`!. 

`.fill(true)`

This fills the array with `true` values, ie. the array will be `[true, true, true, true....]`. 

`.forEach((v,i) => ...` 

You are familiar with the forEach method. 

Note that the lambda function that goes into the forEach method has a _second_ parameter, typically called `i` (for index) - this is the index of the value been called. 


## Exercise 

Implement the FizzBuzz function. 

Navigate to this directory (`lesson-115-fizzbuzz`) in your terminal. 

Install required dependencies with `yarn`.

Start the tests running with `yarn start` (or `yarn start:windows` if you are using Windows). 

Implement the functions in `src/exercise.js` such that the tests pass. You can examine the tests  in `src/exercise.test.js` to see what the functions should do. 


 