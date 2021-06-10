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



const letters = ['a', 'b', 'b']; 
const firstLetter = letters[0]; //'a'
const secondLetter = letters[1]; //'b'

const fourthLetter = letters[3]; 
console.log(fourthLetter); //undefined


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