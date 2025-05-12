def two_oldest_ages(ages):
    f = []
    max1 = max(ages)
    f.append(max1)
    ages.remove(max1)
    max2 = max(ages)
    f.append(max2)
    f[0], f[1] = f[1], f[0]
    return f

def halving_sum(n):
    fff = 0
    while n:
        fff += n
        n //= 2
    return fff

