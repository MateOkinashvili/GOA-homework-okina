function ertnairia(pirveli, meore) {
    if (pirveli.length !== meore.length) {
        return false;
    }

    for (let i = 0; i < pirveli.length; i++) {
        if (pirveli[i] !== meore[i]) {
            return false;
        }
    }

    return true;
}

first = [1,3,4,5,7]
second = [1,3,4,5,6]

frst = [1,3,4,5,5,7,9]
scnd = [1,3,4,5,5,7,9]

sss = [2,2,3,3,4,4]
ddd = [22,33,44,44]

console.log(ertnairia(first, second))

console.log(ertnairia(frst, scnd))

console.log(ertnairia(sss, ddd))