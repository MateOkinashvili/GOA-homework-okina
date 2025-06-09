def switch_it_up(number):
    nums = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    return nums.get(number, "")

###

def to_alternating_case(string):
    result = []
    for i in string:
        if i.islower():
            result.append(i.upper())
        elif i.isupper():
            result.append(i.lower())
        else:
            result.append(i)
    return "".join(result)