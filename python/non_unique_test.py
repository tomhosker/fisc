"""Write a program that for each value in a list, will return that value if it
is not unique within the list.

e.g.
>> non_unique([1, 2, 3, 1, 3])
>> [1, 3, 1, 3]

>> print(non_unique([1, 2, 3, 4, 5]))
[]

>> print(non_unique([5, 5, 5, 5, 5]))
[5, 5, 5, 5, 5]

>> print(non_unique([10, 9, 10, 10, 9, 8]))
[10, 9, 10, 10, 9]
"""


def non_unique(sequence):
    result = []

    for item in sequence:
        if sequence.count(item) > 1:
            result.append(item)

    return result


def test_one():
    assert non_unique([1, 2, 3, 1, 3]) == [1, 3, 1, 3]

def test_two():
    assert non_unique([1, 2, 3, 4, 5]) == []

def test_three():
    assert non_unique([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]

def test_four():
    assert non_unique([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
