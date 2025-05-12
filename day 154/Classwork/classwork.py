def word_search(query, seq):
    result = []
    
    for i in seq:
        if query.lower() in i.lower():
            result.append(i)
    
    if not result:
        return ["None"]
    
    return result


def calc_type(a, b, res):
    if a + b == res:
        return "addition"
    elif a - b == res:
        return "subtraction"
    elif a * b == res:
        return "multiplication"
    elif a / b == res:
        return "division"
    
def unscramble_eggs(word):
    result = ""
    i = 0
    
    while i < len(word):
        result += word[i]  
        i += 2  
        
    return result


