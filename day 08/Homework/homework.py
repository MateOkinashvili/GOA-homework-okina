name = (input("Please enter your name: "))
password = (input("Please enter your password: "))
repeat_password = (input("Please repeat your password: "))


if repeat_password != password:
    print("your password is incorrect! ")
else:
    print("User Successfully Authorized")