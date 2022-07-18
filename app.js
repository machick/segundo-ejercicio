'use strict';
function createArray(numbers){
    let words = [];
    const numberObtain = Number(numbers.join(''));
    if ((numberObtain % 3 === 0) || numbers.includes(3)) {
        words.push('Fizz');
    }
    if ((numberObtain % 5 === 0) || numbers.includes(5)) {
        words.push('Buzz');
    }
    if ((numberObtain % 3 === 0) && (numberObtain % 5 === 0)) {
        words.push('FizzBuzz');
    }
    return words;
}

const numbers = [1, 5, 4, 3, 8, 9, 4];
console.log('Numeros: ');
console.log(Number(numbers.join('')));
console.log('Array creado: ');
console.log(createArray(numbers));

module.exports = {createArray};

