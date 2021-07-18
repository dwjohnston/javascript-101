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

For this modify the code in `exercise.js`

Note that the `onTick` function is declared as a named function. This is so tests can be written against it. 

- Run `yarn start`
- Implement the `onTick` function such that the tests pass. 



