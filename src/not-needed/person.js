console.log('person.js is running');

const isAdult = (age) => age>=18;

const canDrink = (age) => age>=18;

export {isAdult, canDrink};

export default (age) => age>=65;