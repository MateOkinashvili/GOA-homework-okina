#1)
def initial_chars(fullname):
    splited_fullname = fullname.split(" ")
    
    firstname = splited_fullname[0]
    lastname = splited_fullname[1]
    
    result = firstname[0] + "." + lastname[0]
    
    print(result)
   

initial_chars("Mate Okinashvili")
##

#2)
def average_arithmetic(number_list):
    jami = sum(number_list)
    result = jami // len(number_list)
    print(result)

average_arithmetic([1,2,3])
##

#3)
def palidrome(words):
    if words == words[::-1]:
        print(f"{words}", "is palindrome")
    else:
        print(f"{words}", "is not palindrome")


words = input("enter random word here: ")
palidrome(words)
##

#4)
def remove_spaces(word):
    word_without_space = ''
    
    for char in word:
        if char != " ":
            word_without_space = word_without_space + char
    
    print(word_without_space)

remove_spaces("mate okina")
##

#5)
def func(number_list):
    sum = 0
    quantity = 0
    
    for num in number_list:
        if num >= 0:
            sum = sum + num
        else:
            quantity = quantity + 1
    
    print(sum,quantity)

func([1,2,3,-1,-2,-3])

