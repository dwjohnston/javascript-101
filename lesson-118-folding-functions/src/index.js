const values = [1, 2, 3, -5, 10, -15]; 

const sum = values.reduce((acc, cur) => {
    return acc + cur; 
}, 0);

console.log(sum); //-4


const users = [
    {
        id: "a-1", 
        name: "Andy Jones", 
    }, 
    {
        id: "a-2", 
        name: "Belinda Bobson"
    }, 
    {
        id: "a-3", 
        name: "Chaz Chazstone"
    }
]

const userMap = users.reduce((acc, cur) => {
    return {
        ...acc,
        [cur.id]: cur
    }; 
}, {}); 

console.log(userMap);

// { 'a-1': { id: 'a-1', name: 'Andy Jones' },
//   'a-2': { id: 'a-2', name: 'Belinda Bobson' },
//   'a-3': { id: 'a-3', name: 'Chaz Chazstone' } }