#1)
def gamravleba(numbers):
    result = []
    for num in numbers:
        if type(num) == int:
            result.append(num * 2)
        elif type(num) == float:
            result.append(int(num * 4))
    return result

# გატესტვა
magaliti = [1, 1.5, 2, 2.5]
result = gamravleba(magaliti)
print(result)
##

#2)
def gadacvlili(saxelebi):
    gadacvlili_saxeli = []
    for i in range(len(saxelebi)):
        if i % 2 == 0:
            gadacvlili_saxeli.append(saxelebi[i].upper())
        else:
            gadacvlili_saxeli.append(saxelebi[i].lower())
    return gadacvlili_saxeli

# Test the function
originali = ["chad1", "chad2", "chad3", "chad4"]
gadacvlili_saxeli = gadacvlili(originali)
print(gadacvlili_saxeli)
##

#3)
def capitalized(winadadeba):
    return ' '.join(word.capitalize() for word in winadadeba.split())

winadadeba = "hello, this is goa"
result = capitalized(winadadeba)
print(result)
##

#4)
def duplicates(listn):
    a = listn[0]
    listm = []
    for i in listn:
        if i != a:
            listm.append(i)
    return listm
print(duplicates([1, 1, 1, 2, 3, 4]))

