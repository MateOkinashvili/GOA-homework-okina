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
