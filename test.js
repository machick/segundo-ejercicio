require('should');
const { createArray } = require('./app');
describe('Segundo ejercicio', function () {
  describe('No devuelve array si mando strings.', () => {
    it('should return array length 0', function () {
      const numbers = ['asd0','assd','popo'];
      numbers.should.have.length(3);
      const arrayStrings = createArray(numbers);
      arrayStrings.should.have.length(0);
    });
  });
  describe('Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.', () => {
    
    it('should return "Fizz"', function () {
      const numbers = [4, 6, 3];
      numbers.should.have.length(3);
      const arrayStrings = createArray(numbers);
      arrayStrings.should.have.length(1);
      arrayStrings[0].should.be.equal('Fizz');
    });
  });

  describe('Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.', () => {
    it('should return "Buzz"', function () {
      const numbers = [5, 0];
      numbers.should.have.length(2);
      const arrayStrings = createArray(numbers);
      arrayStrings.should.have.length(1);
      arrayStrings[0].should.be.equal('Buzz');
    });
  });

  describe('Devuelve Buzz si el número es divisible por 3 y 5', () => {    
    it('should return "FizzBuzz"', function () {
      const numbers = [4, 5];
      numbers.should.have.length(2);
      const arrayStrings = createArray(numbers);
      arrayStrings.should.have.length(3);
      arrayStrings[0].should.be.equal('Fizz');
      arrayStrings[1].should.be.equal('Buzz');
      arrayStrings[2].should.be.equal('FizzBuzz');
    });
  });
});