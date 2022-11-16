// alert('Hello World!');
/*
    alert('') prints the string to a pop-up. Not preferable.
*/

console.log('Hello World');
console.error('This is an error');
console.warn('This is a warn.')

// console keyword used with many methods
// used for debugging, testing code

// VARIABLE ASSIGNMENT

// var - globally scoped
// let - (ES6) allows reassignment of values. (BEST)
// const - (ES6) use for consts

let age = 30;
age = 31;

console.log(age);

// So one of these keywords is needed for assignment.
// JS has weak typing.

// Primitive data types:
/*
    - Strings (Single OR double quotes.)
    - Numbers
    - Boolean
    - Null
    - Undefined
    - Symbols (ES6) (Uncommon)
*/

// ---------ARRAYS--------------

let numbers = [1,2,3,4,5];
console.log(numbers);

// Outside of array range, "undefined" in console.
console.log(numbers[5]);

// Easy append
numbers[5] = 6;
console.log(numbers[5]);
// Also append***
numbers.push(7);
numbers.pop();
// Insert into beginning:
numbers.unshift(0);
console.log(numbers[6]);

// Check to see if array.
Array.isArray(numbers); // true, is an array.

// Search
console.log(numbers)
console.log(numbers.indexOf(5));

// ------------Object Literals (Structs) -----------------
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// Prints one after another. With a space! "John Doe"
console.log(person.firstName, person.lastName);
console.log(person.address.city, person.address.state);

// Pulling variables out of person. (city is the variable pulled latter)
const { firstName, lastName, address: { city } } = person;
console.log( firstName, lastName, city);

