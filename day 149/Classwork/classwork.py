def cap_me(arr):
    return [i.capitalize() for i in arr]

def arr_check(arr):
    for i in arr:
        if not isinstance(i, list):
            return False
    return True

def square_color(file, rank):
    return 'black' if (ord(file) + rank) % 2 == 0 else 'white'
