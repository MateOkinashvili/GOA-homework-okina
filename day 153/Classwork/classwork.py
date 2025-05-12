def string_to_int_list(s):
    ps = s.split(',')
    result = []
    
    for i in ps:
        if i: 
            result.append(int(i))
    
    return result

def remove_exclamation_marks(s):
    return s.replace('!', '')

def fix_parentheses(strng):
    o = 0
    c = 0

    for i in strng:
        if i == '(':
            o += 1
        elif i == ')':
            if o > 0:
                o -= 1
            else:
                c += 1

    result = '(' * c + strng + ')' * o
    return result
