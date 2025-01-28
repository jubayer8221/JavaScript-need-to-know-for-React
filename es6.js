const numbers = [23, 35, 24, 53];
const student = {
    name: 'Nurul Islam',
    age: 34,
    class: ['final', 'Bsc']
}

// Template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked class ${student.class[0]}`; 
console.log(about)

// arrow function 
const getFiftyFive = () => 55; 
const addSixtyFive = num => num + 65; 
const isEven = x => x % 2 == 0; 

const addThree = (x, y, z) => x + y + z; 
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    
    return
}

// spread operator 
const newNumbers = numbers;
numbers.push(99);

console.log(numbers);
console.log(newNumbers);

const currentNumbers = [...numbers, 55];