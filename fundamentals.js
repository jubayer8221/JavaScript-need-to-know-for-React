// How to declare a variable using let and const 
const fatherName = "arnold";
let season = "Rainy";
season = 'winter';

// Condition 
if (fatherName === 'arnold' || season === 'rainy') {
    
}
else if (fatherName === "Arnold") {
  
}
else {
    
}

// array

const numbers = [89, 45, 30, 12]; 
numbers[0] = 56;

// Loop

for (let i = 0; i < numbers.length; i++){
    const number = numbers[i]; 
    confirm.log(number); 
}

// function

function multi(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multi(35, 75);

// Object

const student = {
    name: 'Sadif khan', 
    age: 32,
    movies: ['King khan', 'Dhakar mastan']
}

// How to access property by name
const myVariable = 'age'; 
console.log(student.age); // direct by property
console.log(student['age']); // access via string

