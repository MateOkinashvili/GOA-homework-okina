def bonus_time(salary, bonus):
    return f"${salary * 10}" if bonus else f"${salary}"

###

def min_max(lst):
    return [min(lst), max(lst)]

###

def sum_mix(arr):
    return sum(int(x) for x in arr)
