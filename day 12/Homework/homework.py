

name = input("Please enter your name: ")

surname = input("Please enter your surname: ")

age = int(input("Please enter your age: "))

home = input("Please enter your home address: ")
###

personal_information = []

personal_information.append(name)

personal_information.append(surname)

personal_information.append(age)

personal_information.append(home)

first = slice(0, 2)

second = slice(1, 3)

third = slice(0, 3)

fourth = slice(1, 4)

print("name and surname", personal_information[first])

print("surname and age", personal_information[second])

print("name, surname and age", personal_information[third])

print("surname, age and home address", personal_information[fourth])

###

num = int(input("Please enter your negative number: "))

for i in range(num, 0):
    print(i)

###
    
info = (name, surname)

info1 = slice(0, 1)
info2 = slice(1, 3)

print("first - name:", info[info1])
print("second - surname:", info[info2])

###

five_favourite_movies = ["avatar", "NFS", "spiderman", "batman", "avengers"]

print(five_favourite_movies[1:3])  

print(five_favourite_movies[2:4]) 

print(five_favourite_movies[-4:-2]) 

print(five_favourite_movies[-3:-1]) 

###

academy = input("please enter the name of academy: ")

if academy[0:1] == "G":
    print("goa is the best choice")
else:
    print("you made the wrong choice")

#end of homework