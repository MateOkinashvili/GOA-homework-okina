def gamr(a):
    ramdeni = 0
    while a >= 10:
        a = 1
        for i in str(a):
            a += int(i)
        ramdeni += 1
    return ramdeni



print(gamr(39))