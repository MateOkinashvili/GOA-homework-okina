#1)

def manual_pop(listi, index_amoshla):
    axali_listi = []
    
    for index in range(0, len(listi)):
        if index != index_amoshla:
            axali_listi.append(listi[index])

    return axali_listi        

names = ["mate", "gio", "nino"]

print(manual_pop(names, 0))
###

#2)

def manual_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item == item_to_count:
            count = count + 1
    
    return count

names = [True, True, False, True]

print(manual_count(names, True))
##

#3)
def manual_min(num_list=None):
    if num_list is None:
        num_list = list(range(1, 11))
    
    return min(num_list)

result = manual_min([1,2,3,4,5,6,7,8,9,10])
print(result)
##

#4)
def manual_max(num_list=None):
    if num_list is None:
        num_list = list(range(1, 11))
    
    return max(num_list)

result = manual_max([1,2,3,4,5,6,7,8,9,10])
print(result)









