#1)
def greet(name):
    print(f"Hello, {name}!")

def print_sequence(n):
    for i in range(1, n+1):
        print(i, end=' ')

def mimateba(a, b):
    return a + b

print(mimateba(2,2))

def gamravleba(a, b):
    return a * b

print(gamravleba(2,2))

def xarisxi(a):
    return a ** 2

print(xarisxi(2))


##

#2)
def sum_even_indices(lst):
    total = 0
    for i in range(len(lst)):
        if i % 2 == 0:  
            total += lst[i]
    return total

numbers = [1, 2, 3, 4, 5]
result = sum_even_indices(numbers)
print(result)  # Output: 9
##

#3)
def luwi_da_kenti(numbers):
    kenti_sum = 0
    luwi_sum = 0
    
    for num in numbers:
        if num % 2 == 0:
            luwi_sum += num
        else:
            kenti_sum += num
    
    return [luwi_sum, kenti_sum]

numbers = [1, 2, 3, 4, 5]
result = luwi_da_kenti(numbers)
print(result) 



#4)
def datvla(sia):
    
        return len(sia)

print(datvla([1,2,3,4,5]))
##




#5)
name = "Mate Okinashvili"
name_list = name.split(" ")
new_name = "ZZZ".join(name_list)

print(name_list)
print(new_name)