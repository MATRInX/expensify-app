// //import './utils.js';
// import { square, add } from './utils.js';
// import isSenior, { isAdult, canDrink } from './person.js';
// import validator from 'validator';

// console.log('app.js is running very well');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(`isAdult: ${isAdult(16)}`);
// console.log(`canDring: ${canDrink(18)}`);
// console.log(`isSenior: ${isSenior(64)}`);
// console.log(`Check an email: ${validator.isEmail('Test@gmail.com')}`);

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>TESTING JSX WITH WEBPACK</p>;

ReactDOM.render(template, document.getElementById('app'));
