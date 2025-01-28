// JASON

const student = {
    name: "Jubayer Al Mahmud",
    age: 25,
    books: ['Norokhadok', 'Khuni']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//fetch
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// key. values 
const keys = Object.keys(student);
const values = Object.values(student);
// for 
const numbers = [23, 12, 12, 11, 23];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);
// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'lanovo0', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'silver' },
    { name: 'watch', price: 300, brand: 'casio', color: 'silver' },
    { name: 'sunglass', price: 200, brand: 'ribon', color: 'black' },
    { name: 'camara', price: 9000, brand: 'nikon', color: 'black' }
]; 

const newProduct = { new: 'Webcam', price: 700, brand: 'kala', color: 'red' }
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remanining = products.filter(products.name !== 'ph//one');