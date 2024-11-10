import random

# Source and destination arrays
source_array = ['wankvet', 'beru', 'tabuk', 'kukava', 'cotne', 'okina', 'shuba', 'papuna', 'suri', 'ugrex', 'baj', 'cercv', 'taz', 'suxish'] 
destination_array = ['chavleishvili: ']
destination2 = ['goisashvili: ']
destination3 = ['chxikvadze: ']

# Specify the number of elements you want to add from source_array to destination_array
num_elements = 4

# Make sure the number of elements to add does not exceed the source array length
if num_elements * 3 <= len(source_array):
    # Randomly select multiple elements from the source array
    for destination in [destination_array, destination2, destination3]:
        random_elements = random.sample(source_array, num_elements)
        # Add selected elements to the destination array
        destination.extend(random_elements)

        source_array = [item for item in source_array if item not in random_elements]





    

print("Updated destination arrays:")
print("destination_array:", destination_array)
print("destination2:", destination2)
print("destination3:", destination3)