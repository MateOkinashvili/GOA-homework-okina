def findNextSquare(sq):
    return -1 if (sq**0.5).is_integer() == False else (sq**0.5 + 1)**2