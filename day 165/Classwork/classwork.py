def whose_move(last_player, win):
    if win:
        return last_player
    else:
        if last_player == "black":
            return "white"
        else:
            return "black"
        
###

def pythagorean_triple(integers):
    integers.sort()
    a, b, c = integers[0], integers[1], integers[2]
    return a**2 + b**2 == c**2

###

def is_valid(formula):
    s = set(formula)
    if 1 in s and 2 in s:
        return False
    if 3 in s and 4 in s:
        return False
    if (5 in s and 6 not in s) or (5 not in s and 6 in s):
        return False
    if 7 not in s and 8 not in s:
        return False
    return True

###

"""
es js ari
function power(x,y){
  if (y === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
"""