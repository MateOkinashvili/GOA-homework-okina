const friends = new Map([
    ["მარი", 25],
    ["გიო", 30],
    ["ანა", 28]
]);

console.log(friends);

const colors = new Set(["წითელი", "ლურჯი", "მწვანე", "ყვითელი", "ნარინჯისფერი"]);

//წითელი არის თუ არა Set-ში
const hasRed = colors.has("წითელი");
console.log(hasRed);
