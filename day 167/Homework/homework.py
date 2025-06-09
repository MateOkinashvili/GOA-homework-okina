def feast(beast, dish):
  return beast[0] == dish[0] and beast[-1] == dish[-1]

###

def enough(cap, on, wait):
  space_left = cap - on
  if space_left >= wait:
    return 0
  else:
    return wait - space_left
  
###

