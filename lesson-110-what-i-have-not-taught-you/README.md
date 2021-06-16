The following is a list of syntax and language features that I haven't taught you. 

It is not intended to actually explain what they are or how to use them, it's just to note that they exist so just incase you see them in the wild, you know that I've intentionally left them out: 


## For and while loops

I've left these out because they necessarily require variable reassignment

```javascript
for (let i =0; i<10; i++){
    console.log(i); 
}


let keepGoing = true; 
while (keepGoing) {
    const n = Math.random(); 

    console.log(n); 

    if (n>0.5) {
        keepGoing = false; 
    }
}
```


## Classes 

Classes are used in an object oriented style of programming, which necessarily requires object mutation. 

```javascript
class Apple {

    constructor(weight) {
        this.weight = weight; 
    }

    getWeight() {
        return this.weight; 
    }
}

const myApple = new Apple(1); 

```


## Shorthand variable assignment. 

I will likely mention this later. 

```javascript

const name = "bob"; 

const user = {
    name
}; 

```

## Destructuring 

I will likely mention this later

```javascript

const user = {
    name: "bob", 
    age: 10, 
    favoriteColor: "blue"
}; 

const {name} = user; 


```

## Rest operator 

I've taught the `...spread` operator, the rest operator applies similarly when used with destructuring: 


```javascript
const user = {
    name: "bob", 
    age: 10, 
    favoriteColor: "blue"
}; 

const {name, ...rest} = user; 
```



## Prototype methods

These are important and I will mention them later: 

```javascript
const usersMap = {
    andy: {
        name: "andy", 
        age: 10, 
    },
    {
    bob: {
        name: "bob", 
        age: 10, 
    }
}

const users = Object.values(usersMap);

```


## Accessing variable properties via index

🤔 - What's the right term for this? 

I will likely mention this later.


```javascript
const user = {
    name: "bob", 
    age: 10, 
    favoriteColor: "blue"
}; 

const name = user["name"]; 
```

## Modules 

I will mention these later. 

```javascript
// file1.js 

export function foo() {

}

// file2.js

import {foo} from "./file1"; 

foo(); 
```

## Asynchronous code 

I will mention these later


```javascript

async function fetchUsers() {
    const result = await fetch("/users"); 
    const data = await result.json(); 
    return data; 
}


function fetchUsers2() {
    return fetch("/users").then(res => res.json()); 
}

```


## Ternery operators 

I will likely mention these later

```javascript

const valueToUse = Math.random() > 0.5 ? "high number" : "low number"; 

```


## Error handling, try/catch

I will mention this later

```javascript

function someFunctionThatMightThrowAnError() {
    if (Math.random() > 0.5) {
        throw new Error("An error!"); 
    }
    else {
        return 1; 
    }
}


try {
    someFunctionThatMightThrowAnError(); 
} catch(err){
    console.log("oh no an error occured!"); 
}

```