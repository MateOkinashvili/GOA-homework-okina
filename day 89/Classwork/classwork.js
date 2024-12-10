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


