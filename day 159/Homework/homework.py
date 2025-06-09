import math

def candies_to_buy(amount_of_kids_invited):
    lll = 1
    for i in range(1, amount_of_kids_invited + 1):
        lll = (lll * i) // math.gcd(lll, i)
    return lll