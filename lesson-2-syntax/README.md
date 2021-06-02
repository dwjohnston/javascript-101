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
const myVariable6 = () => {
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



### `=` vs `==` vs `===`

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





## Functions 

A function allows you to repeat the execution of some code 




