const products = [
    { name: 'laptop', price: 32000, brand: 'lanovo0', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'silver' },
    { name: 'watch', price: 300, brand: 'casio', color: 'silver' },
    { name: 'sunglass', price: 200, brand: 'ribon', color: 'black' },
    { name: 'camara', price: 9000, brand: 'nikon', color: 'black' }
]; 

const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price); 
console.log(prices);
const names = products.map(product => product.name); 
console.log(names);

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.name))
products.forEach(product => {

})

//filter, every matching item will show. 
const cheap = products.filter(product => product.price <= 20000)
// console.log(cheap);


const SpecificName = products.filter(product => product.name.includes('n')); 
console.log(SpecificName);

const SpecificColor = products.filter(product => product.color.includes('b'));
console.log(SpecificColor);

//If i use find, first matching item will show.  
const special = products.find(product => product.name.includes('n'));
console.log(special)