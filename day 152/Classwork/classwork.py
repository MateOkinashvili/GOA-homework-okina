def invert_hash(dictionary):
    return {v: k for k, v in dictionary.items()}

def age(x, y):
    return y * x / (y - 1)

def strong_enough(earthquake, age):
    magnitude = 1
    for shockwave in earthquake:
        magnitude *= sum(shockwave)
    strength = 1000 * (0.99 ** age)
    return "Safe!" if strength >= magnitude else "Needs Reinforcement!"

def get_ascii(ch: str) -> int:
    return ord(ch)
