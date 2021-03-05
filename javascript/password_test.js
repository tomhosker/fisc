var expect = require('expect') ;

/**
 * Write a function that checks that a password meets some minimum requirements, returning True
 * if it does and False otherwise. Deduce the password requirements from the tests.
**/

const PASSWORD_MIN_LENGTH = 10;

function check_password(password) {
    let containsLowerCase = false, containsUpperCase = false,
        containsNumber = false, character;

    if(password.length < PASSWORD_MIN_LENGTH) {
        return false;
    }

    for(let i = 0; i < password.length; i++) {
        character = password[i];

        if(!isNaN(parseInt(character))) {
            containsNumber = true;
        }
        else if(character === character.toLowerCase()) {
            containsLowerCase = true;
        }
        else if(character === character.toUpperCase()) {
            containsUpperCase = true;
        }
    }

    if(!containsLowerCase || !containsUpperCase || !containsNumber) {
        return false;
    }

    return true;
}

describe('password', function () {
    it ('should pass test_one', function () {
        expect(check_password('A1213pokl')).toBe(false) ;
        }) ;
    it ('should pass test_two', function () {
        expect(check_password('bAse730onE')).toBe(true) ;
        }) ;
    it ('should pass test_three', function () {
        expect(check_password('asasasasasasasasasaas')).toBe(false) ;
        }) ;
    it ('should pass test_four', function () {
        expect(check_password('QUERTYqwerty')).toBe(false) ;
        }) ;
    it ('should pass test_five', function () {
        expect(check_password('123456123456')).toBe(false) ;
        }) ;
    it ('should pass test_six', function () {
        expect(check_password('QwErTy911poqqqq')).toBe(true) ;
        }) ;
    it ('should pass test_seven', function () {
        expect(check_password('foobar1942whale')).toBe(false) ;
        }) ;
    }) ;
