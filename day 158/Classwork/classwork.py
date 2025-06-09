def find_uniq(arr):
    if arr[0] == arr[1]:
        common = arr[0]
        for n in arr[2:]:
            if n != common:
                return n
    elif arr[0] == arr[2]:
        return arr[1]
    else:
        return arr[0]
    
###

def find_outlier(integers):
    evens = []
    odds = []
    for num in integers[:3]:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)

    if len(evens) > len(odds):
        for num in integers:
            if num % 2 != 0:
                return num
    else:
        for num in integers:
            if num % 2 == 0:
                return num