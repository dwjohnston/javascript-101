# Lesson 105 - String formatting. 

 
So far they way we have been printing strings by concatenating them. 

```javascript
const number = 1; 
console.log("The number is: " + number); 
```

This can be quite cumbersome if we have something like: 

```javascript
const num1 = 1; 
const num2 = 2; 
const num3 = 3; 

console.log("The first number is " + num1 + ", the second number is " + num2 + " and the third number is " num3);
```

Luckily, there's a couple of easier ways. 

## Multiple arguments on the console.log function 

Firstly, you can actually put multiple arguments into the `console.log` function, and it will print them all separated by spaces. 

```javascript
console.log(1, 2, 3); //1 2 3 
console.log("The first number is", num1, ", the second number is", num2, "and the third number is", num3);
//The first number is 1 , the second number is 2 and the third number is 3
```

Note that this doesn't behave quite nicely when we the command to immediately follow the number. 

For this, the backtick string (The  `` ` `` symbol, it's usually to the left of the `1` on your keyboard) helps. 

## Template literals (backtick strings)

Backtick strings, formally known as [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) give you nice control over formatting a string. 

They can be used as ordinary strings: 


```javascript
console.log(`hello world!`); 
```

This can be helpful if you need to use quote marks inside your string: 

```javascript
console.log(`hello "world"`); 
```

They can be used to make multiline strings: 

```javascript
console.log(`
hello
world 
how 
are 
you 
today
`); 
```

And they can evalute expression inside of them, using the dollar-curly syntax: 

```javascript
console.log(`The first number is ${num1}, the second number is ${num2} and the third number is ${num3}.`); 

```

 Any expression can be evaluated inside a dollar-curly expression 

 ```javascript
 console.log(`Hello ${1 + 1 +1}`);
```


## Exercise

No exercise for this one. This is just hopefully helpful for you. 

