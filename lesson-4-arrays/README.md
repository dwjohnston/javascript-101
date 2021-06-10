# Lesson 4 - Arrays

Arrays are a common and important data structure in computer science. 

Arrays are basically a list of values. This is useful when you need to deal with a list of anything, a list of users, a list of items in a shopping cart etc. 

## Declaring an array 

We can declare an array using square brackets: 

```javascript
const myFirstArray = [1, 2, 3];
```


In JavaScript an array can include anything kind of value: 

```javascript
const mySecondArray = [
  'foo',
  1,
  {
    hello: 'world!',
  },
  () => 'red',
];
```

Including other arrays!


```javascript
const myThirdArray = [
    [1,2,3], 
    ['a', 'b', 'c']
]
```

An array like this is often called a _two dimensional_ array, and of course you can have three-dimensional, four-dimensional arrays and so forth. 


## Arrays start at 0 

In most, but not all, programming langauges, including JavaScript, the first element on an array has the index position of `0`, not `1` as might be intutive. 

Some languages have made arrays start at 1, and they get mocked: 

![alt text](./assets/image2.jpeg)

## Accessing elements on an array 

We can access the elements on an array using the square brackets: 

```javascript
const letters = ['a', 'b', 'b']; 
const firstLetter = letters[0]; //'a'
const secondLetter = letters[1]; //'b'
```

In JavaScript, if you try access an array position that doesn't exist, you will get an `undefined`

```javascript
const fourthLetter = letters[3]; 
console.log(fourthLetter); //undefined
```


## Array Functions

In JavaScript, arrays are powerful because they come with a bunch of useful methods. 

See the full list here: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

**Nb.** As a matter of course - The MDN documenation tends to be the canonical documentation for JavaScript, it's _very very_ useful and I advise preferring it as reference material over other sources. 

Remember that stuff about prototypes in the last lesson? Well let's look at the prototype of an array: 

![alt text](./assets/prototype.png)

There's a whole lot more functions! And note that those are the same functions you will see in the above documentation. 


I won't go through every function, but here are some of the main ones you might want to use: 

### forEach

forEach will execute a function for every element on the array: 


```javascript
letters.forEach((value) => {
    console.log("the value is: " + value)
}); 

// the value is: a
// the value is: b
// the value is: b
```

Let's talk about what we're doing here: 

1. Firstly, we're calling an _object function_ (a function that belongs to and object, in this case the object is the `letters` array). 
2. We pass as the first and only argument, a function: `(value) => {//...}` This is commonly known as a [_lambda_ or _anonymous_ function.](https://en.wikipedia.org/wiki/Anonymous_function#:~:text=In%20computer%20programming%2C%20an%20anonymous,not%20bound%20to%20an%20identifier.). (Unfortunately AWS Lambda functions, which is a service provided by Amazon confuses the terminology a bit 😭 ) 
3. That function has a parameter `value`, that is is going to be the current element as the we iterate over the array. 
4. We print the value. 

Many, but not all, of the array functions work in a manner like this, you pass a function as the argument, and that function will be called for every element in the array. 

### map

Map is perhaps the the most useful array method. 

We can use `.map` to create a new array from the old array. 

For example: 

```javascript
const transformedLetters = letters.map((v) => {
    return "Value: " + v; 
}); 

console.log(transformedLetters); //[ 'Value: a', 'Value: b', 'Value: b' ]
```

In this case we are doing something very similar as the `forEach` example, except in this case we _return_ a value from the lambda function, and these return values are what make up our new array. 


### filter 

Filter does what it sounds like, it filters the array, according to a condition that you define: 

```javascript
const oddNumbers = numbers.filter((v) => {
    return v%2 === 1; 
}); 

console.log(oddNumbers)
```

