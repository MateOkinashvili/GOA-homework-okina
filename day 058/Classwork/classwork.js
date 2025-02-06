const budget = prompt("please enter your budget: ");



if(budget < 1000){
    console.log("you cant buy phone")
} else {
    console.log("you can buy phone")
}


for(let i = 0; i <20; i--){
    console.log(i)
}



function evenSum(num){
    let sum = 0
    for (let i = 0; i <= num; i++){
        if(i % 2 === 0){
            sum += 1;
        }
    }
    return sum

}

console.log(evenSum(10));

function evenSum(num){
    let sum = 0;
    for(let i = 2; i <= num; i += 2){
        sum += i;
    }
    return sum;
}


console.log(evenSum(10)); // Output: 30