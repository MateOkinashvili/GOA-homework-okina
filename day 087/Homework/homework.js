const bestStudents = new Map();
bestStudents.set("Group A", "nika");
bestStudents.set("Group B", "mate");
bestStudents.set("Group C", "gio");
bestStudents.set("Group D", "sandro");
bestStudents.set("Group E", "deme");

console.log("Map size:", bestStudents.size);


for (const [group, student] of bestStudents) {
    console.log(`Best student in ${group}: ${student}`);
}

//

const countries = new Map();

countries.set("საქართველო", "თბილისი");
countries.set("საფრანგეთი", "პარიზი");
countries.set("იაპონია", "ტოკიო");

countries.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});

//


const cities = new Map();
cities.set("თბილისი", "საქართველო");
cities.set("პარიზი", "საფრანგეთი");
cities.set("ტოკიო", "იაპონია");


const keyToCheck = "თბილისი";
if (cities.has(keyToCheck)) {
    console.log(`${keyToCheck} არსებობს Map-ში.`);
} else {
    console.log(`${keyToCheck} არ არსებობს Map-ში.`);
}

//

const citiess = new Map([["თბილისი", "საქართველო"], ["პარიზი", "საფრანგეთი"]]);

cities.clear();

console.log(citiess.size === 0 ? "Map ცარიელია" : "Map არ არის ცარიელი");
