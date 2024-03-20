#1) შექმენით სია სადაც გადასცემთ 10 ინტეგერს, შემდეგ გადაუარეთ ამ სიას და თითოეული მათგანი გაამრავლეთ/გაყეთ/დაუმატეთ/გამოაკელით ერთმანეთს.

magalitad = [2, 4, 6, 8, 10, 12, 14, 16, 18,20]

print("magalitebia: ")

print(f"{magalitad[0]} * {magalitad[1]} =" , magalitad[0] * magalitad[1])
print(f"{magalitad[2]} - {magalitad[3]} =" ,  magalitad[2] - magalitad[3])
print(f"{magalitad[9]} // {magalitad[4]} =" ,  magalitad[9] // magalitad[4])
print(f"{magalitad[5]} + {magalitad[6]} =" ,  magalitad[5] + magalitad[6])
print(f"{magalitad[8]} * {magalitad[7]} =" ,  magalitad[8] * magalitad[7])

###

#2)შექმენით სია, სადაც გამოიტანთ სათითაოდ მნიშვნელობებს და ასევე ჩაანაცვლებთ სხვა მნიშვნელობებით.

list = ["banana", "apple", "orange"]

print(list[0])
print(list[1])
print(list[2])

list[2] = "avocado"

print(list)

###

#3)შექმენით სია და მომხმარებელს აარჩევინეთ სასურველი მნიშვნელობა

drinks = ["coke", "fanta", "sprie"]

user_choice = int(input("Please enter the number of the drink: "))

print("user wants:",drinks[user_choice]) 

###