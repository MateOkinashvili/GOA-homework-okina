join_char = input("Please enter char to join strings in list: ")
result = ""

for i in range(5):
    word = input("Please enter word: ")
    if i % 2 == 0:
        result = result + word + join_char


print(result[0:-1])