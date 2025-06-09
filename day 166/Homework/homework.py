def divisible_by(numbers, divisor):
  result = []
  for number in numbers:
    if number % divisor == 0:
      result.append(number)
  return result

###

def stringy(size):
  result = ""
  for i in range(size):
    if i % 2 == 0:
      result += "1"
    else:
      result += "0"
  return result

###

def palindrome_chain_length(n):
    count = 0
    current = n

    def is_pal(val):
        return str(val) == str(val)[::-1]

    while not is_pal(current):
        rev_s = str(current)[::-1]
        rev_n = int(rev_s)
        current += rev_n
        count += 1
    return count