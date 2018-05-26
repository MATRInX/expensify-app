// OBJECT

// const person = {
//     name: 'Marcin',
//     age: 31,
//     location: {
//         city: 'Tarnowskie Góry',
//         temp: 21
//     }
// };

// const {name: imie = 'Anonim', age } = person;

// console.log(`${imie} is ${age}.`);

// const {city, temp} = person.location;

// if (temp && city){
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Tytul mojej ksiazki',
//     author: 'Janek Kowalski',
//     publisher: {
//         name: 'Helion'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

// ARRAY
// const addrss = ['1234 S Junioer Street', 'Philadelphia', 'Pensylvania', '12345'];

// const [adress, city, state, zip] = addrss;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.74'];

const [product, , price] = item;

console.log(`A medium ${product} cost ${price}`);