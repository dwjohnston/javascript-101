# Lesson 118 - Folding functions

A [folding function](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) (AKA a reducer or accumulator) is a particular kind of callback function used in functional programming. 

Essentially a folding function will traverse a data structure, and _accumulate_ a final value. 

The best example of a folding function is the [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function. 

Here's an example of how we would use it: 

```javascript
const values = [1, 2, 3, -5, 10, -15]; 

const sum = values.reduce((acc, cur) => {
    return acc + cur; 
}, 0);

console.log(sum); //-4
```

Let's examine what's happening here:

1. The reduce function is similar to the other `Array.prototype` functions like `.map` or `.filter` in that it iterates over the array and examines each element in the array. 

2. But the signature is slightly different, instead of taking the value of the element as the first parameter, the first parameter is the _accumulated_ value, that is - it's the 'total' so far. 

3. The return value of the lambda function will be the accumulated value of the next call of it. 

4. The second paramter of the `reduce` function (`0` in this case) is the initial accumulated value. 


So in this example the kind of accumulation I have demonstrated is summing an array of numbers. 

But folding functions can be used to build objects too. 

```javascript
const users = [
    {
        id: "a-1", 
        name: "Andy Jones", 
    }, 
    {
        id: "a-2", 
        name: "Belinda Bobson"
    }, 
    {
        id: "a-3", 
        name: "Chaz Chazstone"
    }
]

const userMap = users.reduce((acc, cur) => {
    return {
        ...acc,
        [cur.id]: cur
    }; 
}, {}); 

console.log(userMap);

// { 'a-1': { id: 'a-1', name: 'Andy Jones' },
//   'a-2': { id: 'a-2', name: 'Belinda Bobson' },
//   'a-3': { id: 'a-3', name: 'Chaz Chazstone' } }
```

Here we are using the spread operator (from lesson 104) bracket notation (From lesson 111) to first copy the accumulating object, and then define create a property name on that object. 

You can see that the way folding functions typically work is that the object they return is always the same shape, though it is often a different shape to the values being iterated. 




