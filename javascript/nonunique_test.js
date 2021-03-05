var expect = require('expect') ;

/**
 * Write a program that for each value in a list, will return that value if it is not unique
 * e.g.
 * >> non_unique([1,2,3,1,3])
 * >> [1, 3, 1, 3]
 * >> print(non_unique([1,2,3,4,5]))
 * []
 * >> print(non_unique([5,5,5,5,5]))
 * [5, 5, 5, 5, 5]
 * >> print(non_unique([10,9,10,10,9,8]))
 * [10, 9, 10, 10, 9]
**/

function non_unique(values) {
    let result = [];

    for(let i = 0; i < values.length; i++) {
        for(let j = 0; j < values.length; j++) {
            if(i === j) {
                continue;
            }
            else if(values[i] === values[j]) {
                result.push(values[i]);
                break;
            }
        }
    }

    return result;
}

describe('nonunique', function () {
    it ('should pass test_one', function () {
        var correct_vals = [1, 3, 1, 3] ;
        expect(non_unique([1, 2, 3, 1, 3])).toEqual(correct_vals) ;
        }) ;
    it ('should pass test_two', function () {
        var correct_vals = [] ;
        expect(non_unique([1, 2, 3, 4, 5])).toEqual(correct_vals) ;
        }) ;
    it ('should pass test_three', function () {
        var correct_vals = [5, 5, 5, 5, 5] ;
        expect(non_unique([5, 5, 5, 5, 5])).toEqual(correct_vals) ;
        }) ;
    it ('should pass test_four', function () {
        var correct_vals = [10, 9, 10, 10, 9] ;
        expect(non_unique([10, 9, 10, 10, 9, 8])).toEqual(correct_vals) ;
        }) ;
    }) ;
