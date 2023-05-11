const leoName = 'Leo Musvaire';
const leoSurname = 'Surname'; // Fixed missing variable
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';

// Only change below this line

const leo = {
  name: leoName + ' ' + leoSurname, // Added space between first and last name
  balance: leoBalance,
  access_id: '47afb389-8014-4d0b-aff3-e40203d2107f', // Fixed object property name
  age: 24,
  address: {
    // Added nested object
    number: leoNumber,
    street: leoStreet,
    'postal-code': leoPostal, // Used quotes for hyphenated property names
  },
};

const sarah = {
  name: sarahName + ' ' + sarahSurname, // Added space between first and last name
  age: 62,
  access_id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
  balance: sarahBalance,
  address: {
    // Added nested object
    number: sarahNumber,
    street: sarahStreet,
    'postal-code': sarahPostal, // Used quotes for hyphenated property names
  },
};

console.log(leo, leo.address['postal-code']); // Fixed property access syntax and used quotes for hyphenated property names
console.log(sarah, sarah.address['postal-code']); // Fixed property access syntax and used quotes for hyphenated property names
