okina = {'name': 'mate',
           'lastname': 'okinashvili',
           'height': 175,
            'age':17 }

to_join = okina.values
values_joined = " ".join([str(i) for i in to_join()]) 

print(values_joined)
