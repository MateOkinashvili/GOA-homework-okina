

function addition(first, second){
    let res = []
    for(let i = 0; i < first.length; i++){
        for(let d = 0; d < second.length; d++){
            res.push(first[i] + second[d])
        }
    }

    console.log(res)
}

addition([[1,3],[1,4]],[[4,1],[2,2]])




function switcher(arr){
    let a = arr[0]
    let b = arr[1]
    let res  = []
    for(let i = 0; i < arr.lenth; i++){
        d  = a[i] + b[i]
        res.push(d)
    }

    console.log(res)
}

switcher([[1,2], [3,4]])