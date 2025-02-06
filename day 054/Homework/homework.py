# 1(8kyu)

def how_many_dalmatians(n):

    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"] 

    if n <= 10:
        return dogs[0]
    elif n <= 50:
        return dogs[1]
    elif n < 101:
        return dogs[2]  
    elif n == 101:
        return dogs[3]
    
# 2(8kyu) 

def get_size(w,h,d):
    area_volume = []
    area_volume.append(2*(d*w+d*h+w*h))
    area_volume.append(d*w*h)
    return area_volume

# 3(8kyu)

def correct(s):
    corrected = []
    for i in s:
        if i == '5':
            corrected.append('S')
        elif i == '0':
            corrected.append('O')
        elif i == '1':
            corrected.append('I')
        else:
            corrected.append(i)
    return ''.join(corrected)
        
# 4(7kyu)
def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i
        

# 5 (7kyu) 
def max_diff(lst):
    lst.sort()
    if len(lst) <=1:
        return 0
    return lst[-1] - lst[0] 