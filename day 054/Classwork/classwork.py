#8kyu

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
    
#8kyu

def get_size(w,h,d):
    area_volume = []
    area_volume.append(2*(d*w+d*h+w*h))
    area_volume.append(d*w*h)
    return area_volume