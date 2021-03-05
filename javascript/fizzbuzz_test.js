var expect = require('expect') ;

const FIZZBUZZ_MAX_NUMBER = 100;
const FIZZ_DIVISOR = 3, BUZZ_DIVISOR = 5;

/**
 * Write a program that returns the numbers from 1 to 100 in a list, except:
 *   - For multiples of three return "Fizz"
 *   - For multiples of five return "Buzz"
 *   - For numbers which are multiples of both three and five return "FizzBuzz"
**/

function fizzbuzz () {
    const DIVISOR_PRODUCT = FIZZ_DIVISOR*BUZZ_DIVISOR;
    let result = [];

    for(let i = 1; i <= FIZZBUZZ_MAX_NUMBER; i++) {
        if(i%DIVISOR_PRODUCT === 0) {
            result.push("FizzBuzz");
        }
        else if(i%FIZZ_DIVISOR === 0) {
            result.push("Fizz");
        }
        else if(i%BUZZ_DIVISOR === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i);
        }
    }

    return result;
}

describe ('fizzbuzz', function () {
    it ('should return the correct list', function () {
        expect(fizzbuzz()).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']) ;
        }) ;
    }) ;
