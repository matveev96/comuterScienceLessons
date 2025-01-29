// циклы

for(let i = arr.length-1; i >= 0; i--) {
    // console.log(arr[i])
}

for(let i = 0; i < arr.length-2; i++) {
    // console.log(`${arr[i]} ${arr[i+1]}`)
}

for(let i = 1; i < arr.length; i++) {
    // console.log(`Previous: ${arr[i-1]} Current: ${arr[i]}`)
}

for(let i = 0; i < arr.length; i++) {
    if(i-1 < 0) {
        // console.log(`Previous: no element, Current: ${arr[i]}`)
    }  else {
        // console.log(`Previous: ${arr[i-1]}, Current: ${arr[i]}`)
    }
}

let i = 0
while (i < arr.length) {
    // console.log(arr[i])
    i++
}

let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana'];
let fruitCount = {}
for (let i = 0; i < fruits.length; i++) {
    if(!fruitCount[fruits[i]]) {
        fruitCount[fruits[i]] = 1
    } else {
        fruitCount[fruits[i]]++
    }
}
// console.log(fruitCount)

const numbers = [1,2,4,7,2,-1,-10,2,4,1,189]

let minVal= numbers[0];
for (let i = 1; i < numbers.length; i++) {
    minVal = minVal < numbers[i] ? minVal : numbers[i]
}
// console.log(minVal)

let maxVal= numbers[0];
for (let i = 1; i < numbers.length; i++) {
    maxVal = maxVal > numbers[i] ? maxVal : numbers[i]
}
// console.log(maxVal)