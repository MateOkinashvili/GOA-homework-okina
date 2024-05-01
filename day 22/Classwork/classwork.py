def manual_pop(listi, index_amoshla):
    axali_listi = []
    
    for index in range(0, len(listi)):
        if index != index_amoshla:
            axali_listi.append(listi[index])

    return axali_listi        

names = ["mate", "gio", "nino"]

print(manual_pop(names, 0))











