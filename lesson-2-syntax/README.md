# Lesson 2 - Syntax

As mentioned in lesson 1 - JavaScript is a continually evolving programming language. 

As such in many tutorials on the internet you may see certain syntax or ways of doing things that is outdated. I will point those language features out but brush past them. 

Additionally - I am going to start with teaching a [non-mutative](https://en.wikipedia.org/wiki/Immutable_object), [functional](https://en.wikipedia.org/wiki/Functional_programming) style of programming. (Don't worry if you don't know what either of those terms mean, it doesn't matter for now, but I mention it for posterity). 

## console.log

To start the only way we can observe what our application is doing is by making `console.log` statements, what would be known as print statements in other languages like Python or Java. 

We saw an example of a console.log in the first exercise when in the code we had: 

```
console.log("hello world!");
```

And when we ran the code it printed "hello world!" to the screen. 

## Comments

Code comments are 'code' that isn't code at all, they serve to be readable documentation for developers, that lives in the code. 

In JavaScript code comments can be created with a double forward slash like: 

```javascript
// this is a code comment. 
```

Also, multiline comments can be created with a forward slash then start like: 


```javascript
/*
 This is a multi line comment!
 I am another line. 

 And another. 

 */
```

You will see me use code comments through out this documentation to explain what some code does, etc. 

## Semicolons are optional 

In JavaScript semicolons (the `;` symbol) are optional. Semicolons are often used in programming languages as 'fullstop', they indicate that that's the end of the instruction. 

In Python they are not allowed. Newlines are used instead. 

In languages like C and Java they are mandatory. 

In JavaScript they are optional. This is one of those langauge quirks I mentioned. 

_As a best practise, in my opinion, it is best to always use semicolons anyway_. 

If you're interested, my reasoning is in [this Twitter thread](https://twitter.com/Wattenberger/status/1254424368958103557), where someone who was using a 'no semicolons' style of coding spent hours trying to debug some ambiguous code. 

I thought I'd mention it just incase anywhere in my documentation or example code I've left one off. 

## Variables 

A variable can be created using the `const` keyword.

```javascript
const myVariable1 = "hello"; // A 'string' variable. In all programming languages, a 'string' means 'text' - it's a string of characters.  
const myVariable2 = 99; // A number variable. 
const myVariable3 = null; // A 'null' In programming languages 'null' means 'intentionally empty'. 
const myVariable4 = true; // A boolean variable. A boolean is a true/false value. 
const myVariable5 = {
    name: "bob"
}; // An object
const myVariable6 = [1,2,3,4] // An array variable. Arrays are basicically lists in programming languages. 
const myVariable7 = () => {
    console.log("hello!"); 
};  // A function 

```

The variable can then be referenced by using the name of the variable: 

```javascript
const someVariable ="hello"; 
console.log(someVariable); 
```

:warning: **Note!**

There are two other keywords than can be used to create variables. 

- `let` Allows variable reassignment, but as I've said we are doing a functional style, it's not needed, for now. 
- `var` Is similar to `let` but it's much older and does have some quite technical differences. I generally recommend never using it. 

I'm mentioning them here as you may seem them in other tutorials etc. 

### Variable naming

Different languages and different programmers/programming teams have different conventions about how we name variables. Note that spaces are typically not allowed. 

Here a list of common styles: 

- camelCase - initial lower case, and then following words are upper case. 
- PascalCase - like camel case, but the first letter is capitalized
- kebab-case - hyphens seperate the words. 
- snake_case - underscores seperate the words. 

Note that kebab case is illegal in JavaScript - as the hyphen is interpreted as a 'minus' operation, (see below). 

For our purposes we will stick to camelCase, it's the most common style, and is much easier to write than adding underscores everywhere. 

Note also that as a convention in code we like to use American English. For example if we had a variable for color, I would call it `color` and not `colour`, even though I'm in a country that uses British English. This is because most programming languages use American English and it will get confusing switching between the two. 

## Math operations 

The standard math operations that most other programming languages have exist in JavaScript

- `+`  Plus
- `-`  Minus
- `*`  Multiply 
- `/`  Divide
- `%`  Modulo (What is the remainder after doing an integer division)
- `**` To the power of.

```
const a = 1+1; //2
const b = 1-1; //0
const c = 2*3; //6
const d = 10/3; //3.333333333333
const e = 10%3; //1 
const f = 2**8; //256 
```


Additionally the `+` operator can be used to join strings: 

```
const a = "one"; 
const b = "two"; 
const c = a + b; //"onetwo"

cosnt d = 1; 
const e = 2; 
const f = d+e; //3


const g = d + a; //"1one"

```

🤔 Funnily enough, you can actually join any two variables together with the `+` operator - a function and an object, an object and an object, try it for yourself - not that this would ever be useful. 

## If statements 

An if statement allows you to evaluate an expression and if that expression is true, then execution some code. 

For example the following code will print "Number is 2!"

```javascript
const number = 2; 

if (number === 2) {
    console.log("Number is 2!"); 
}

```

Whereas the following code will print nothing: 

```javascript
const number = 3; 

if (number === 2) {
    console.log("Number is 2!"); 
}

```

An `else` statement can also be used to cover the opposite case: 

```javascript
const number = 3; 

if (number === 2) {
    console.log("Number is 2!"); 
} else {
    console.log("Number is anything but 2!)
}
```



### Comparrisons

#### `=` vs `==` vs `===`

You'll note that in those if conditions, I'm using that `===` operator. 

JavaScript is unique in that it has a triple equals operator, most programming languages have just a single equals and double equals operator. 

Single equals is an _assignment_ operation - ie, we are using when we create variables, to say 'Make the variable become this value'. 

The double equals in most most languages, including JavaScript is an _equality_ operation - it is asking 'Are these two values the same thing?'. 

In JavaScript though, we have _strict_ equality (`===`) and a weaker equality (`==`)

That is if you use the `==` operator JavaScript will actual perform some type conversions before comparing them, so you have situations like: 

```
0 == '';   // true
0 == '0';  // true
1 == true; // true 
```

Whereas using strict equality all of these are false: 

```
0 === '';   // false
0 === '0';  // false
1 ===  true; // false 
```

[See a good discussion of this here.](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons#:~:text=JavaScript%20has%20two%20sets%20of,true%20and%20!%3D%3D%20produces%20false%20.)

Bottom line, just always use `===`. 

You can also use `!==` to denote 'not equals'. 


#### Other comparisons

We can also use do less than /greater than comparisons: 

- `<` Less than
- `>` Greater than
- `<=` Less than or equals
- `>=` Greater than or equals

#### And/Or comparrison chaining 

You can do and/or operations with  `&&` and `||` syntax. 

eg. to find a value between 5 and 10 inclusive, you might do: 

```javascript
const valueIsBetweenFiveAndTen = (value >= 5) && (value <= 10); 
```

## Functions 

A function allows you to repeat the execution of some code in a convenient manner. 

For example, lets say we have some code where we want to determine if a series of numbers are: even, a whole number, and what their square is. 

So for one number, our code might look like; 

```javascript
const theNumber = 2; 

const numberIsEven = (theNumber%2) === 0; 
const numberIsWhole = (theNumber%1) === 0; 
const square = theNumber * theNumber; 

if (numberIsEven) {
    console.log("The number is EVEN"); 
}else {
    console.log("The number is ODD");
}

if (numberIsWhole) }{
    console.log("The number is WHOLE); 
}else {
    console.log("The number is NOT WHOLE"); 
};

console.log("The number's square is" + square); 

```

But what if we wanted to do this for three numbers? 

```
const firstNumber = 2; 
const secondNumber = 4.2; 
const thirdNumber = 9; 
```

We could copy paste that above code and modify it slightly, but that would be pain. 

Instead, we can declare a function do do this functionality for us. 

We can declare functions in two ways: 

### the `function` keyword. 

```javascript 
function myFunction(functionArgument1, functionArgument2) {
    // Function implementation goes here. 

    return "my return value"; 
}
```
### Arrow functions 

```javascript 
const myArrowFunction = (functionArgument1, functionArgument2) => {
    // function implementation goes here

    return "my return value"; 
}
```

For the purposes of this lesson, these two are are the same. There is a difference in how they behave, but we don't need to worry about that for now. 

### Anatomy of a function 

There are three components of the function: 

#### The name: 

`function myFunction` - Just like a variable, we just want this to have a good descriptive name, and we're using the camel case naming convention. 

Generally as a convention, it's good for functions to have a _verb_ name, because functions are a 'doing' action. eg. 'printNumberInformation' or 'getUser' or 'findHighestValue' are all good function names. 

#### The function parameters 

`function myFunction`**`(functionArugment1, functionArgument2)`**`{`

Function parameters, or function arguments are the _input values_ of the function. 

These act as variables that are only available inside the function. 

#### Return statement 

**`return "my return value`**

The return value is the _output value_ of a function. 


A function can have many input values, but only one output value. However, if you need to return multiple values from a function, you can always return an array or an object. 

A function doesn't have to return a value. 


### Calling a function 

To execute a function we type the function, followed by round parenthesis: 

```javascript
myFunction("first argument", "second argument"); 
```

Here we are _passing in_ two values to the function 'first argument' and 'second argument'. 

Note that we don't have to pass values into a function, if it doesn't need them: 

```javascript
myFunction();
```

If the function will also return a value, we can assign this to a variable: 

```javascript

const functionResult = myFunction(); 
```

### Putting it together, our first function. 

So let's get back to our example where we want to print the information about several numbers, we can create a function like this: 


```javascript
function printNumberInformation(theNumber) {
    const numberIsEven = (theNumber%2) === 0; 
    const numberIsWhole = (theNumber%1) === 0; 
    const square = theNumber * theNumber; 

    if (numberIsEven) {
        console.log("The number is EVEN"); 
    } else {
        console.log("The number is ODD");
    }

    if (numberIsWhole){
        console.log("The number is WHOLE"); 
    }else {
        console.log("The number is NOT WHOLE"); 
    };

    console.log("The number's square is" + square); 
}
```

And then call this with :

```
printNumberInformation(2); 
printNumberInformation(4.2); 
printNumberInformation(9); 
```

Isn't that a lot easier than copy pasting the code!

## Errors 

We're about ready to start coding, so let's talk about errors. 

Errors are a special kind of object that help deal with when things have gone wrong, or more likely, the programmer has made a mistake. 

(Note though, all computer programs should expect errors to occur and just deal with them in a manner than keeps the application going, we will discuss this in a later lesson). 

Errors provide the following functionality: 

- Stop the program executing at the point the the code encountered the error. 
- Provide a message that helps understand what went wrong 
- Provide a _stacktrace_ - a list of of the steps the program took to enounter the error. 
- Allow the program to recover from the error at a point where it is practical.

We call the process of creating one of these error objects and having it stop the program execution until its recovery process 'throwing an error' and we will talk more about _catching_ errors in another lesson.  

### Creating an error

So how can we create an error? Just write some code that doesn't make sense!

For example: 

```
const myValue = "hello"; 
myValue(); 
```

`myValue` isn't a function, it's a string! This code throws the following error: 

```
Uncaught TypeError: myValue is not a function
    at <anonymous>:1:1
```

So we can see the error message is being helpful - it is telling us what is wrong - myValue is not a function. 

Some other errors we can create: 

If we just type some gobblygook we will get a syntax error or a reference error: 

```javascript
asdfsad; 
```

```
Uncaught ReferenceError: asdfsad is not defined
    at <anonymous>:1:1
```

Realistically we might encounter this kind of error if we have made a typo: 

```javascript
function myFunction( {   // note the missing closing parenthesis
    console.log("hello"); 
}

```

```
Uncaught SyntaxError: Unexpected token '.'
```

Here JavaScript is trying to be helpful in telling us where the syntax error is by telling us where the code stopped making sense to it. (The `.` it is refering to is the one between `console` and `log`). 

## Let's write some code!

The way this and later exercises will be structured is using a tool called Jest. 

Jest is a JavaScript testing framework.

I will write some tests, and you have to implement functions such that tests pass. 










