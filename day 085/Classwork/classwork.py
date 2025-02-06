nums = int(input("enter amount of numbers: "))
numbers = []

for i in range(1, nums+1):
    num = int(input("enter a number: "))
    numbers.append(num)

for i in range(len(numbers)):
    if i % 2 != 0:
        print(numbers[i])


nums22 = []

for i in range(10):
    nums22.append(int(input("nums: ")))

for k in range(10):
    print(nums22[k]*nums22[k])

n2 = int(input("number of nums:"))
nLst2 = []

for i in range(n2):
    nLst2.append(int(input("nums: ")))

for l in range(n2-1, -1, -1):
    print(nLst2[l])