def even_chars(st):
    jami = []
    if len(st) < 2 or len(st) > 100:
        return "invalid string"
    for i in range(len(st)):
        if i % 2 == 1:
            jami.append(st[i])
    return jami

def replace_nth(text, n, old_value, new_value):
    if n <= 0 or text.count(old_value) < n:
        return text
    cc = 0
    result = []
    for i in text:
        if i == old_value:
            cc += 1
            if cc % n == 0:
                i = new_value
        result.append(i)
    return ''.join(result)
