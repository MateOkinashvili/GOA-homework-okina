def solution(array_a, array_b):
    i = 0
    a = 0
    listn = []
    for i in range(len(array_a)):
        if array_a[i]<array_b[i]:
            while array_a[i] < array_b[i]:
                array_a[i] += 1
                a +=1
        elif array_b[i] < array_a[i]:
            while array_b[i] < array_a[i]:
                array_b[i] += 1
                a += 1
        a*=a
        listn.append(a)
        a-=a
    b = 1
    while b < len(listn):
        listn[0] += listn[b]
        b+=1
    return listn[0]/len(listn)