#1)
name = input("Enter your name: ")

if name == name.lower():
    print("your name is lower case")
else:
    print("your name is not lower case")
##

#2)
def check_word():
    datvla = 0
    while True:
        word = input("Please enter a word in uppercase: ")
        datvla += 1

        if not any(letter.islower() for letter in word):
            print("successfully entered in uppercase!")
            break
        else:
            print("contains lowercase letters. try again.")

    print("cda: ", datvla)

check_word()
##

#3)
user_word = input("Please enter uppercase word: ")

result = ''

for index in range(len(user_word)):
    if index % 2 == 0:
        result = result + user_word[index].upper()
    else:
        result = result + user_word[index].lower()

print(result)
##

#4)
saxeli = input("chaweret tqveni saxeli:")

if len(saxeli) > 5:
    saxeli == saxeli.upper()
else:
    saxeli == saxeli.lower()

print(saxeli)
##

#5)
names = ["luka", "gio", "lile", "nia"]

for index in range(len(names)):
    names[index] = names[index].capitalize()

print(names)
##

#6)
firstname = input("Please enter your firstname: ").capitalize()
lastname = input("Please enter lastname: ").capitalize()

result = firstname[0] + '.' + lastname[0]

print(result)
##

#7)
word = input("enter your word:")
x = word.find(input("please enter the letter you want to find:"))

print(x)