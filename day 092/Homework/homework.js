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

function symbFreq(string) {
    const freqMap = new Map();
    for (const char of string) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    return freqMap;
}

const freqResult = symbFreq("hello");
console.log(freqResult);


