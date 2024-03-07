#1) შეამომწმოთ იყოფა თუ არა მომხმარებლის მიერ შემოტანილი რიცხვი 2 ზე და 4ზე ზუსტად

num = int(input("enter your number: "))

if num % 2 == 0 and num % 4 == 0:
    print("mathematical operation is correct")
else:
    print("incorrect!")
###

#2) მაგალითი შედარების ოპერატორებზე რომლებიც არის (>   <   >=     <=    ==   !=) 


num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))
num3 = int(input("Please enter the third number: "))
num4 = int(input("Please enter the fourth number: "))




print(f"{num1} < {num2}" , num1 < num2)

print(f"{num1} > {num2}" , num1 > num2)

print(f"{num1} <= {num2}" , num1 <= num2)

print(f"{num1} >= {num2}" , num1 >= num2)

print(f"{num1} == {num2}" , num1 == num2)

print(f"{num1} != {num2}" , num1 != num2)

print(f"{num3} < {num4}" , num3 < num4)

print(f"{num3} > {num4}" , num3 > num4)

print(f"{num3} <= {num4}" , num3 <= num4)

print(f"{num3} >= {num4}" , num3 >= num4)

print(f"{num3} == {num4}" , num3 == num4)

print(f"{num3} != {num4}" , num3 != num4)
###

#3) 10 მაგალითი and ოპერატორზე


num5 = int(input("enter the 5th number: "))


print(num5 < 8 and num5 <= 15)

print(num5 != 77 and num5 == 25)

print(num5 < 312 and num5 > 30)

print(num5 > 42 and num5 > 56)

print(num5 <= 1 and num5 <= 10)

print(num5 > 3 and num5 > 33)

print(num5 <= 9 and num5 <= 333)

print(num5 > 7 and num5 > 18)

print(num5 != 38 and num5 != 21)

print(num5 <= 2 and num5 <= 72)

