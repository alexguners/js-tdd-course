/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import calc, { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  describe('smoke tests', () => {
    it('should exist Calc variable', () => {
      expect(calc).to.exist;
    });

    it('should exist method sum', () => {
      expect(calc.sum).to.exist;
    });

    it('should exist method sum', () => {
      expect(calc.sub).to.exist;
    });

    it('should exist method sum', () => {
      expect(calc.div).to.exist;
    });

    it('should exist method sum', () => {
      expect(calc.mult).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum 2+2', () => {
      expect(sum(2, 2)).to.be.equals(4);
    });
  });

  describe('Sub', () => {
    it('should return 2 when sub 4-2', () => {
      expect(sub(4, 2)).to.be.equals(2);
    });

    it('should return -5 when sub 5-10', () => {
      expect(sub(5, 10)).to.be.equals(-5);
    });
  });

  describe('Div', () => {
    it('should return 4 when div 8/2', () => {
      expect(div(8, 2)).to.be.equals(4);
    });

    it('should return `Nao pode dividir por 0` when divide by 0', () => {
      expect(div(8, 0)).to.be.equals('Nao pode dividir por 0');
    });
  });

  describe('Mult', () => {
    it('should return 4 when mult 2*2', () => {
      expect(mult(2, 2)).to.be.equals(4);
    });

    it('should return 0 when mult 2*0', () => {
      expect(mult(2, 0)).to.be.equals(0);
    });
  });
});
