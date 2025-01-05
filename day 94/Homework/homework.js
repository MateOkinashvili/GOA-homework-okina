function greetWithName(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greetWithName("John", () => {
    console.log("Done!");
});

//

function delayedMessage(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}

delayedMessage("Processing complete!", () => {
    console.log("finished");
});

//

function processArrayWithDelay(numbers, callback) {
    let result = [];
    let count = 0;

    numbers.forEach((num, index) => {
        setTimeout(() => {
            result[index] = num * num;
            count++;
            if (count === numbers.length) callback(result);
        }, 2000);
    });
}

processArrayWithDelay([1, 2, 3, 4], (squaredArray) => {
    console.log("Processed array:", squaredArray);
});

//

function greetUser() {
    const name = prompt("What is your name?");
    setTimeout(() => {
        alert(`Hello, ${name}! Thank you for helping.`);
    }, 3000);
}

greetUser();



