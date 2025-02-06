const cars = ['Bugatti', 'Bmw', 'Mclaren']

const cities = ['Varshawa', 'Tbilisi', 'Tokyo']

const languages = ['English', 'Spanish', 'Russian']

cars.forEach((values)=>{
    console.log(values)
})

cities.forEach((values, index)=>{
    console.log(values)
    console.log(index)
})

languages.forEach((values, index, arr)=>{
    console.log(values)
    console.log(index)
    console.log(arr)
})



function manualForEach(arr, costumFunc){
    for(let i = 0; i < arr.length; i++){
        costumFunc(arr[i], i, arr)
    }
}

manualForEach(cars, (values)=>{
    console.log(values)
})



const nums = [1,2,3,4,5]

const doubled = nums.map(num => num * 2)

console.log(doubled)


function manualMap(arr, costumFunc){
    res = []
    
    for(let i = 0; i< arr.length; i++){
        res.push(costumFunc(arr[i], i, arr))
    }
    return res
}

const newNums = manualMap(nums, (num)=>{
    return -num
})

console.log(newNums)