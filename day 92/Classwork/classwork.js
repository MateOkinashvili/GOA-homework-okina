function combSets(sets) {
    const gaertianeba = new Set();
    for (const set of sets) {
        for (const item of set) {
            gaertianeba.add(item);
        }
    }
    return gaertianeba;
}

const result = combSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
console.log(result);

function symbolFrequency(string) {
    const frequencyMap = new Map();
    for (const char of string) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}

const frequencyResult = symbolFrequency("hello");
console.log(frequencyResult);
