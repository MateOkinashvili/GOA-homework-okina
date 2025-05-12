def billboard(name, price=30):
    cost = 0
    for i in name:
        cost += price
    return cost

def is_vow(inp):
    aaa = {97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u'}
    res = []
    for i in inp:
        if i in aaa:
            res.append(aaa[i])
        else:
            res.append(i)
    return res

def who_is_paying(name):
    if len(name) <= 2:
        r = [name]
    else:
        ddd = name[0:2]
        r = [name, ddd]
    return r

def next_id(arr):
    i = 0
    while i in arr:
        i += 1
    return i

