javascript
function countOccurrences(arr) {
    let counts = {};
    let result = [];

    arr.forEach(num => counts[num] = (counts[num] || 0) + 1);
    arr.forEach(num => result.push(counts[num]));

    console.log(result.join(","));
}
