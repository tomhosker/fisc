"""Write a function that checks that a password meets some minimum requirements, returning True
if it does and False otherwise. Deduce the password requirements from the tests.
"""

import pytest

PASSWORD_MIN_LENGTH = 10

GOOD_PASSWORDS = ['bAse730onE', 'QwErTy911poqqqq']
BAD_PASSWORDS = ['A1213pokl', 'asasasasasasasasasaas', 'QUERTYqwerty', '123456123456', 'foobar1942whale']


def check_password(password):
    contains_upper_case = False
    contains_lower_case = False
    contains_number = False

    if len(password) < PASSWORD_MIN_LENGTH:
        return False

    for character in password:
        if character.isupper():
            contains_upper_case = True
        elif character.islower():
            contains_lower_case = True
        elif character.isnumeric():
            contains_number = True

    if (contains_upper_case and contains_lower_case and contains_number):
        return True

    return False

@pytest.mark.parametrize('password', GOOD_PASSWORDS)
def test_good_password(password):
    assert check_password(password) is True

@pytest.mark.parametrize('password', BAD_PASSWORDS)
def test_bad_password(password):
    assert check_password(password) is False
