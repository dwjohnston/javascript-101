## Getting Started

You will need: 

- A computer
- A terminal (A linux/mac machine already comes with one, for Windows users, use Git Bash - see below) 
- VSCode - [get it here](https://code.visualstudio.com/)
- Git - [get it here](https://git-scm.com/)
## Basic command lines commands

I encourage you to get comfortable using the command line. 

To get started you will want to do something like this, open you terminal and type: 

Navigate to your 'home' directory: 

```bash
cd ~/
```

Create a folder called 'git-workspace'
```bash
mkdir git-workspace
```

Navigate to that folder

```bash
ch git-workspace
```

Clone this repo: 

```bash
git clone https://github.com/dwjohnston/javascript-101.git
```

Navigate into lesson 1

```bash
cd javascript-101/lesson-101-introduction-to-javascript
```

When you are done with lesson 101 - you can navigate up a folder using `..` like: 

```bash
cd ../lesson-102-syntax
```

## Note for Windows users

If you are a Windows user, we assume that you are using [Git Bash](https://gitforwindows.org/) as your terminal to run all exercises. 

These exercises will have you run `yarn start:windows` instead of `yarn:start`. The reason for this is an issue with how Jest works on Windows, [see this Stack Overflow question and answer here](https://stackoverflow.com/a/63938553/15812488). 

If you have any trouble running any exercises, please [raise an issue](https://github.com/dwjohnston/javascript-101/issues) on the github. 