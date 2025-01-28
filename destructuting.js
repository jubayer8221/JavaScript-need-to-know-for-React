// array destructuring

const numbers = [42, 65];
const [x, y] = [42, 65];
 
// const [x, y] = numbers;
console.log(x, y);


function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums; 

}

console.log(boxify(90, 34));


const [first, second] = [90, 34]
console.log(boxify(90, 34))


// Object Destructuring

const {name, age}= {name: 'alu', salary: 3000}