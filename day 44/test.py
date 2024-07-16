global_var = "I am a global variable"

def my_function():
    local_var = "I am a local variable"
    print(global_var)
    print(local_var)

my_function()

print(global_var)