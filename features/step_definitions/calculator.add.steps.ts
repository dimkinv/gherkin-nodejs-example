import * as chai from 'chai';
import { Calculator } from '../../app/calculator';
import { defineSupportCode } from 'cucumber';

const expect = chai.expect;

defineSupportCode(function ({ Given, Then, When }) {
    let calc: Calculator;
    let result: number;

    When('I execute {int} - {int} the result should be {int}', function (arg1, arg2, result, callback) {
        calc = new Calculator();
        expect(calc.subtract(arg1, arg2)).to.be.equal(result);
        callback();
    });


    When('I execute {int} + {int} the result should be {int}', function (arg1, arg2, result) {
        calc = new Calculator();
        expect(calc.add(arg1, arg2)).to.be.equal(result);
    });

    When('I execute {int} * {int} the result should be {int}', function (arg1, arg2, result) {
        calc = new Calculator();
        expect(calc.multi(arg1, arg2)).to.be.equal(result);
    });

    When('I execute {int} / {int} the result should be {float}', function (arg1, arg2, result) {
        calc = new Calculator();
        expect(calc.div(arg1, arg2)).to.be.equal(result);
    });
});