def rrrstrip(g):
    result = ""
    for i in range(len(g) - 1, -1, -1):
        if g[i] != ' ':
            for j in range(i + 1):
                result += g[j]
            break
    return result


def lllstrip(g):
    result = ""
    for i in range(len(g)):
        if g[i] != ' ':
            for j in range(i, len(g)):
                result += g[j]
            break
    return result


