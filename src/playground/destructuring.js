//
// Object destructuring
//

// console.log('destructuring');

// const person = {
//     name: 'Chuck',
//     age: 57,
//     location: {
//         city: 'Eagle',
//         temp: 36
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// person.name = 'Charles';

// console.log(`${name} is ${age}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         names: 'Penguin'
//     }
// };

// const {name: PublisherName = 'Self-Publish' } = book.publisher;

// console.log(PublisherName);

//
// Array destructuring
//

const address = ['W346 S6515 Roy Martin Drive', 'Eagle', 'WI', '53119'];
const [, city, state = 'MI'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemDesc,,medPrice] = item;
console.log(`A medium ${itemDesc} costs ${medPrice}`);
