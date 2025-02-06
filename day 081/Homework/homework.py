cifrebi = input("enter your number: ")

kenti = 0


for i in cifrebi:
    if int(i) % 2 != 0:
        kenti += 1

        print(kenti)



n = int(input("ricxv raod"))
numbers = list(map(int, input("ricxvebi").split()))

valid_numbers = [num for num in numbers if num < 100 and ((num % 3 == 0 and num % 6 != 0) or (num % 5 == 0 and num % 10 != 0))]

print(len(valid_numbers))
