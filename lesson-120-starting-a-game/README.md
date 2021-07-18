# Lesson 120 - Starting a game 

Ok, lets start having some fun!

We are going to start making the game 'snake' which you may have played on your old Nokia phone. 

We'll build this game up over several lessons. 

We'll be using a little CLI framework I created. 

https://registry.npmjs.org/node-cli-character-matrix

Which brings us to our first lesson: 

## Reading the documentation

Reading the documentation is huge part of being a good programmer. It is an acquired skill, and some documentation is better than others. 

The documentation on the npm page tells you how to use the framework. 

It has some example code, and that's possibly the best place to start.

## Exercise

- Run `yarn` to install the dependencies
- Copy paste example code into in to `src/index.js`
- Start the application running with `yarn dev`

Observe the behavior of the application. 


## Exercise

Let's modify the application so that instead of going down on an angle, it first heads down the left-most column, and then goes up the second to left column, and so forth. 

Think you can do it without any help? 

### Note about the exercise structure

Because creating this 'game' involves a long running process, we're breaking the application into two _modules_ (we have not discussed modules yet).

- `exerciseApplication.js` contains the long running process that calls `startMatrixApplication` - this thing could potentially run indefinitely! So we don't really want to use this in tests. 

- `exercise.js` contains the core logic - the `handleGameTick` function. Note that this is just a plain function!


To run the whole application run `yarn start`. You may want to start here to see that your application is doing what is expected, and then run the tests to see if it is passing. 

To run the tests run `yarn test` (or `yarn test:windows` if you are using windows). 


Implement `handleGameTick` such that the tests pass. 