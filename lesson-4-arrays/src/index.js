const myFirstArray = [1, 2, 3];

const mySecondArray = [
  'foo',
  1,
  {
    hello: 'world!',
  },
  () => 'red',
];


const myThirdArray = [
    [1,2,3], 
    ['a', 'b', 'c']
]



const letters = ['a', 'b', 'c']; 
const firstLetter = letters[0]; //'a'
const secondLetter = letters[1]; //'b'

const fourthLetter = letters[3]; 
console.log(fourthLetter); //undefined


const arrayLength = letters.length; 
console.log(arrayLength); //3; 

const lastLetter = letters[arrayLength -1]; 
console.log(lastLetter); //'c'; 


const my2dArray = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8]
]; 

const el0 = my2dArray[0][0]; 
const el4 = my2dArray[1][1]; 
const el5 = my2dArray[1][2]; 

console.log(el0, el4, el5); //0 4 5



const array1 = [1,2,3]; 
const array2 = [5,6,7]; 

const array3 = [...array1, ...array2]; 
console.log(array3); //[ 1, 2, 3, 5, 6, 7 ]


console.log(myFirstArray.__proto__); 

console.log(Object.getOwnPropertyNames(myFirstArray)); 




letters.forEach((value) => {
    console.log("the value is: " + value)
}); 

// the value is: a
// the value is: b
// the value is: b


const transformedLetters = letters.map((v) => {
    return "Value: " + v; 
}); 

console.log(transformedLetters); //[ 'Value: a', 'Value: b', 'Value: b' ]



const numbers = [1,2,3,4,5]; 

const oddNumbers = numbers.filter((v) => {
    return v%2 === 1; 
}); 


console.log(oddNumbers); //[ 1, 3, 5 ]


const foundOddNumber = numbers.find((v) => {
    return v%2 === 1; 
}); 

console.log(foundOddNumber); //1


const someNumbersAreGreaterThanThree = numbers.some((v) => {
    return v > 3; 
}); 

console.log(someNumbersAreGreaterThanThree); //true 


const allNumbersAreGreaterThanThree = numbers.every((v) => {
    return v > 3; 
}); 

console.log(allNumbersAreGreaterThanThree); //false