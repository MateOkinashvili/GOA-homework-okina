#1)

def manipulate_string(input_string):
  
    lower_string = input_string.lower()
    
    upper_string = input_string.upper()
    
    capitalized_string = input_string.capitalize()
    
    find_index = input_string.find('a')
    
    return lower_string, upper_string, capitalized_string, find_index

# Test the function
input_string = "Hello, World!"
lower_string, upper_string, capitalized_string, find_index = manipulate_string(input_string)

print(f"Lowercase: {lower_string}")
print(f"Uppercase: {upper_string}")
print(f"Capitalized: {capitalized_string}")
print(f"Index of 'a': {find_index}")
##

#2)
def shecvla(input_list):
    index = int(input("Enter the index you would like to change (0 to {}): ".format(len(input_list) - 1)))
    new_value = input("Enter the new value: ")

    input_list[index] = new_value

    modified_string = ' '.join(input_list)

    return modified_string

name_list = ["name1", "name2", "name3", "name4", "name5"]
result = shecvla(name_list)

print("shecvlili listi:")
print(result)
