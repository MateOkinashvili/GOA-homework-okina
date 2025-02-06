me = {'name': 'mate',
      'lastname': 'okianshvili',
      'height': 175,
      'age':16 }

to_join1 = me.values
joined1 = " ".join([str(i) for i in to_join1()])



sister = {'name': 'nino',
       'lastname': 'okinashvili',
       'height': 167,
       'age':27 }

to_join2 = sister.values
joined2 = " ".join([str(i) for i in to_join2()])







result = []
result.append(joined1)
result.append(joined2)


print(str(result))



