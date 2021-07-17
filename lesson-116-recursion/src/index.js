function myFirstRecursiveFunction(currentValue, endValue) {
  // This is what is known as the 'base case' - it's the case that will stop calling the recursion
  if (currentValue === endValue) {
    return;
  } 
  else {
    console.log('Current value is', currentValue);
    // This is the recursion - we are calling the function again, this time increasing the number by one.
    myFirstRecursiveFunction(currentValue + 1, endValue);
  }
}

myFirstRecursiveFunction(0, 10);

// Current value is 0
// Current value is 1
// Current value is 2
// Current value is 3
// Current value is 4
// Current value is 5
// Current value is 6
// Current value is 7
// Current value is 8
// Current value is 9

new Array(10).fill(true).forEach((v, i) => {
  console.log('Current value is ', i);
});



function factorial(n) {

    // For the purposes of this exercise we will just say that the factorial of any negative numbers will also be 1.

    // The base case(s):
    // 0 = 1
    // 1 = 1 
    if (n < 2) {
        return 1; 
    }

    else {
        return n * factorial(n -1); 
    }
    
}
 
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24