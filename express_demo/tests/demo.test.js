/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { it, describe } = require('mocha');
const { checkPrime } = require('../maths');

describe('test suite', () => {
  it('should equal 2', () => {
    expect(1 + 1).to.equal(2);
  });
});

describe('prime test suite', () => {
  it('should not be prime', () => {
    expect(checkPrime(1)).to.be.false;
    expect(checkPrime(9)).to.be.false;
    expect(checkPrime(15)).to.be.false;
  });

  it('should be prime', () => {
    expect(checkPrime(7)).to.be.true;
    expect(checkPrime(89)).to.be.true;
    expect(checkPrime(97)).to.be.true;
  });
});
