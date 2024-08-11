let b1 = document.getElementById("add")
let b2 = document.getElementById("subtract")
let b3 = document.getElementById("reset")
let p = document.getElementById("txt")
let result = 0

function add(){
    result += 1
    p.textContent = result
}

function subtract(){
    result -= 1
    p.textContent = result
}

function reset(){
    result -= result
    p.textContent = result
}