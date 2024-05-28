#1)
saxeli = input("ჩაწერეთ თქვენი სახელი: ")

print(saxeli.lower())
print(saxeli.upper())
print(saxeli.capitalize())
##

#2)
def manual_len(collection):
    count = 0
    for item in collection:
        count = count + 1
    return count

print(manual_len(["mate", "gio", 8, False, "luka"]))