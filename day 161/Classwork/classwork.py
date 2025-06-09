def count_positives_sum_negatives(arr):
    if not arr:
        return []

    pos = 0
    neg = 0

    for i in arr:
        if i > 0:
            pos += 1
        elif i < 0:
            neg += i
            
    return [pos, neg]

###

def cap_me(arr):
    return [name.capitalize() for name in arr]