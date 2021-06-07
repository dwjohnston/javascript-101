/*
console.log("hello world!"); 
console.log("I'm Sathsara");

const myVariable1 = "hello";
console.log(myVariable1);

const x = 2;
const y = 3;
console.log(x+y);
console.log(myVariable1+x+"world");

if (x===3) {;
    console.log("its 3");
} else {
    console.log("Its not 3");
}

const theNumber = 2; 

const numberIsEven = (theNumber%2) === 0; 
const numberIsWhole = (theNumber%1) === 0; 
const square = theNumber * theNumber; 

if (numberIsEven) {
    console.log("The number is EVEN"); 
}else {
    console.log("The number is ODD");
}

if (numberIsWhole) {
    console.log("The number is WHOLE"); 
}else {
    console.log("The number is NOT WHOLE"); 
};

console.log("The number's square is " + square); 


const the2Number = 15;

const numberBetweenFiveAndTen = (the2Number >=5) && (the2Number <= 10)

if (numberBetweenFiveAndTen) {
    console.log("the number is between five and ten");
} else {
    console.log("the number is not between five and ten");
};
*/

function printNumberInformation(theNumber) {
    const numberIsEven = (theNumber%2) === 0; 
    const numberIsWhole = (theNumber%1) === 0; 
    const square = theNumber * theNumber; 

    console.log("The number is " + theNumber)

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

    console.log("The number's square is " + square); 
}

printNumberInformation(2); 
printNumberInformation(4.2); 
printNumberInformation(9); 

