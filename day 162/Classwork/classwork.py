def array_diff(a, b):
    bbb = set(b)
    result = []
    for i in a:
        if i not in bbb:
            result.append(i)
    return result