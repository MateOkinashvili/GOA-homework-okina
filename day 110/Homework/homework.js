const rows = 7, cols = 6;
const idk = [];

// შეყვანა
for (let i = 0; i < rows; i++) {
    idk[i] = [];
    for (let j = 0; j < cols; j++) {
        idk[i][j] = parseFloat(prompt(`შეიყვანეთ (${i + 1}, ${j + 1}):`)) || 0;
    }
}

console.log("სტრიქონის საშუალო:");
idk.forEach(row => {
    const avg = row.reduce((sum, num) => sum + num, 0) / row.length;
    console.log(avg.toFixed(2));
});


console.log("სვეტის საშუალო:");
for (let j = 0; j < cols; j++) {
    let sum = 0;
    for (let i = 0; i < rows; i++) {
        sum += idk[i][j];
    }
    console.log((sum / rows).toFixed(2));
}

//

//

const rowss = 5, colss = 6;
const idkk = [];

// შეყვანა
for (let i = 0; i < rowss; i++) {
    idkk[i] = [];
    for (let j = 0; j < colss; j++) {
        idkk[i][j] = prompt(`შეიყვანეთ ელემენტი (${i + 1}, ${j + 1}):`) || ' ';
    }
}

// გაცვლა
const temp = idkk[0][0];
idkk[0][0] = idkk[rowss - 1][colss - 1];
idkk[rowss - 1][colss - 1] = temp;

console.log("შედეგი:");
console.table(idkk);

//

//

const rowsss = 6, colsss = 5;
const idkkk = [];

// დავამატებ მალევე სხვებსაც