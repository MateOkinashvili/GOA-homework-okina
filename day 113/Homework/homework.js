class Academy {
    static arr = [];

    constructor(count, name, color) {
        this.count = count;
        this.name = name;
        this.color = color;
        Academy.arr.push(this);
    }

    get pixels() {
        return `${this.count / 5}px`;
    }

    get column() {
        return `
            <div class='academy' style='height: ${this.pixels}; background: ${this.color}'>
                <div class='count'>${this.count}</div>
                <div class='name'>${this.name}</div>
            </div>
        `;
    }

    static render() {
        let main = document.querySelector('main');
        for (let i = 0; i < Academy.arr.length; i++) {
            let academy = Academy.arr[i];
            main.innerHTML += academy.column;
        }
    }
}

new Academy(500, "cgjdghf", "black");
new Academy(700, "gjfgh", "red");
new Academy(200, "khkhkj", "brown");
new Academy(1200, "dasdfs", "blue");
new Academy(1000, "asdasd", "grey");

Academy.render();