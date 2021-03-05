"""Write a function that checks that a password meets some minimum requirements, returning True
if it does and False otherwise. Deduce the password requirements from the tests.
"""

import pytest


GOOD_PASSWORDS = ['bAse730onE', 'QwErTy911poqqqq']
BAD_PASSWORDS = ['A1213pokl', 'asasasasasasasasasaas', 'QUERTYqwerty', '123456123456', 'foobar1942whale']


def check_password(password):
    # Write your solution here

    return None


@pytest.mark.parametrize('password', GOOD_PASSWORDS)
def test_good_password(password):
    assert check_password(password) is True

@pytest.mark.parametrize('password', BAD_PASSWORDS)
def test_bad_password(password):
    assert check_password(password) is False
