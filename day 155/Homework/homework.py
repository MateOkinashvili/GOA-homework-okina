def solve(a,b):
    result = ''
    for i in a:
        if i not in b:
            result += i
    for i in b:
        if i not in a:
            result += i
    return result

def largest_sum(s):
    mmm = 0
    current = 0

    for i in s:
        if i == '0':
            if current > mmm:
                mmm = current
            current = 0
        else:
            current += int(i)

    return mmm

def decode(message):
    ddd = ''
    for i in message:
        if i == ' ':
            ddd += ' '
        else:
            ddd += chr(219 - ord(i))
    return ddd

