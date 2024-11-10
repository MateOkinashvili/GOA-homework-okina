function arrShuffle(arr){
    let shuffled = []
    while(arr.length>0){
        let randomIndex = Math.floor(Math.random() * arr.length)
        shuffled.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }
    console.log(shuffled)
}

arrShuffle([1,2,3,4,5])