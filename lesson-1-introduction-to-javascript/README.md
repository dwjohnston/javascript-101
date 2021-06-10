# Lesson 1 - Introduction to JavaScript

First, let's talk about what you perhaps already might have already heard about JavaScript.

Firstly - JavaScript is _not_ Java. The reason that the names are similar is marketing - JavaScript was invented at a time when Java was very popular, and [the company responsibly for creating it basically wanted to ride on its coat tails](https://en.wikipedia.org/wiki/JavaScript#Creation_at_Netscape). 

Secondly - you might have heard that JavaScript is an awful programming language with memes such as: 

![alt text](./assets/jsmeme.jpeg)

Certainly it's true that JavaScript has some quirks, and has a bit of 'anything goes' kind of vibe to it, but it's very flexible and has some very nice language features. 

## A quick history of JavaScript

Imagine an internet without JavaScript. 

Back then all logic had to be performed on the server side. 

That is, your internet browser would hit a page, you would fill in a form say, submit that form to the server, the server reads the form and then decides what do and sends you back a new page. 

THe problem is - what happens if the form you are submitting - you forgot to fill a mandatory email field? You would have to wait for the page to be sent off and to get a response from the the server just to tell you 'the email field needs to be filled'.

My understanding is that this was the initial motivation for JavaScript - 'what if we could run some code in the browser to do simple little validation things like this, before we submit the form?'. 

From there - JavaScript has been used to more and more behaviour, and these days a typical web application executes more of its logic _in the browser_ rather than sending requests off to server to execute the logic. 

JavaScript has evolved since it was first created. New features are always being proposed and created. 

More recently, a technology called NodeJS was created. NodeJS allows you to run JavaScript directly on a computer, rather than being specifically in a browser. 

## Why JavaScript? 

**JavaScript is the language that runs in your browser**

Basically, if you want to run some code in the browser, you have to use JavaScript. 

Server side, you have plenty of options, Python, Java, NodeJS, C, Rust, the list goes on. 

JavaScript is the only language that runs in the browser. 

**nb.** Actually that previous sentence is a complete lie. There is a new technology called [Web Assembly (WASM)](https://webassembly.org/) which allows running any code inside a browser. However the technology is still new, and arguably experimental. The vast vast majority of web applications are still going to be written in JavaScript. 

## Why browser based applications? 

Browser based applications are convenient. 

Every device has a web browser - so you just need to write your application for the browser and it will work for everyone. 

You don't need to tell people to install anything for them to use your application - all they need to do is visit your web address. 


## Tools 

### The browser

The quickest way you get started with writing JavaScript is to open your web browser, and press F12 to open the developer console. 

Go to the console tab and you can start writing code there. 

### NodeJS

NodeJS is a JavaScript runtime that you can install on your computer, you can get it here: 
https://nodejs.org/en/

You can execute some JavaScript by running `node myfile.js` where `myfile.js` contains your JavaScript code. 

### NPM/Yarn

NPM (Node Package Manager) and Yarn are JavaScript package managers. 

NPM comes with NodeJS. Yarn is an alternative, and one that I prefer. 

You can install it here: https://yarnpkg.com/getting-started/install

A package, also known as a library, is a bundle of code that someone else has written, that you might want to pull into your code and use. 

NPM and Yarn also have additional functionality such as allowing you to run scripts. 

This brings us to our first exercise: 

## Exercise 1 - Hello World!

1.  In your terminal, navigate to this folder (`lesson-1-introduction-to-javascript`). 
2. Run `yarn start`

You should see the text `hello world!` printed to the screen. 

3. Feel free to open the `src/index.js` file and play around there, running `yarn start` after each save to see how your changes affect how the program runs. 

