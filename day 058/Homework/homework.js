const budget = prompt("please enter your budget: ");



if(budget < 1000){
    console.log("you cant buy phone")
} else {
    console.log("you can buy phone")
}
//here i used if and else to determine if i have the budget



//infinitely -



function evenSum(num){
    let sum = 0
    for (let i = 0; i <= num; i++){
        if(i % 2 === 0){
            sum += 1;
        }
    }
    return sum

}
//if i <= then add 1 to i, if i divided by 2=0 then sum+1

console.log(evenSum(10));

function evenSum(num){
    let sum = 0;
    for(let i = 2; i <= num; i += 2){
        sum += i;
    }
    return sum;
}
//


console.log(evenSum(10)); // Output: 30