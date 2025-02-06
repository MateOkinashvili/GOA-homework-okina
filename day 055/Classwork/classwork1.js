const p = document.getElementById("result")

function mathematicalOperations() {
    
    let num1 = Number(prompt("enter first number: "))
    let num2 = Number(prompt("enter second number: "))
    let operation = prompt("operation: + , - , * , /")
    let result = 0

    if (operation === "+"){
        result = num1 + num2
        console.log(result)
        p.textContent = result
    }

    else if (operation === "-"){
        result = num1 - num2
        console.log(result)
        p.textContent = result
    }

    else if (operation === "*"){
        result = num1 * num2
        console.log(result)
        p.textContent = result
    }

    else if (operation === "/"){
        result = num1 / num2
        console.log(result)
        p.textContent = result
    }
}