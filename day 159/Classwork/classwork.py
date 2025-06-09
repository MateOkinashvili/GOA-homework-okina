def solution(s):
    result = ""
    for i in s:
        if 'A' <= i <= 'Z':
            result += " " + i
        else:
            result += i
    return result

##

def camel_case(s):
    words = s.split()
    result = ""
    for word in words:
        result += word.capitalize()
    return result