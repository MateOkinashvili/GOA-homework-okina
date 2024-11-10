
function rowsCols(rows, cols){
    for(let row = 0; row <= rows; row++){
        for(let col = 0; col <= cols; col++){
            console.log(`rows: ${row}, columns ${col}`)
        }
    }
}

rowsCols(3, 9)



function multiply(){
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let res = []
    for(let i = 0; i < nums.length; i++){
        for(let d = 0; d < nums.length; d++){
            res.push(nums[i] * nums[d])
        }
        console.log(res)
    }
}

multiply()