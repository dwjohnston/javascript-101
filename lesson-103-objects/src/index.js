


const initalObject = {
    name: "name", 
    value: 1
};

function useObject(obj) {
    obj.value = obj.value + 1; 
    console.log("Object's value is: " + obj.value)
    return obj; 
}


console.log(initalObject); //{ name: "name", value: 1 }
useObject(initalObject);  //Object's value is: 2
console.log(initalObject); //{ name: "name", value: 2 }



const initalObject2 = {
    name: "name2", 
    value: 1
};

function useObject2(obj) {
    const newObject = {
        ...obj, 
        value: obj.value + 1
    }; 
    console.log("Object's value is: " + newObject.value); 
    return newObject; 
}

console.log(initalObject2); //{ name: "name", value: 1 }
const newObject = useObject2(initalObject2);  //Object's value is: 2
console.log(initalObject2); //{ name: "name", value: 1 }
console.log(newObject); //{ name: "name", value: 2 }


const valueA = {
    a: 1, 
    b: 2, 
}
const valueB = {
    c: 3, 
    d: 4
}; 

const valueC = {
    ...valueA, 
    ...valueB,
}; 

console.log(valueC); //{ a: 1, b: 2, c: 3, d: 4 }


const objA = {
    value: 1
}; 

const objB = {
    value: 1
}; 

const objectsAreEqual = objA === objB; 
console.log(objectsAreEqual);


const emptyObj = {}; 
console.log(emptyObj.__proto__); 