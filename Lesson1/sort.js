//Сортировка выбором/selection sort

//Sort select with array
const array = [7, 1, 2, 3, 5, 2, 5, 8, 9, 5, 1]
const resultArr = []

function findMin(array) {
    let minVal
    let index
    if (array.length > 0) {
        minVal = array[0]
        index = 0
    }
    for (let j = 1; j < array.length; j++) {
        if(minVal > array[j]) {
            minVal = array[j]
            index = j
        }
    }
    return {
        value: minVal,
        index: index
    }
}

while(array.length > 0) {
    const minElement = findMin(array)
    resultArr.push(minElement.value)
    array.splice(minElement.index, 1)
}

// console.log(resultArr)

//Sort select without array

const numbers = [7, 1, 2, 3, 5, 2, 5, 8, 9, 5, 1]

function findMin(array) {
    let minVal
    let index
    if (array.length > 0) {
        minVal = array[0]
        index = 0
    }
    for (let j = 1; j < array.length; j++) {
        if(minVal > array[j]) {
            minVal = array[j]
            index = j
        }
    }
    return {
        value: minVal,
        index: index
    }
}

while(array.length > 0) {
    const minElement = findMin(array)
    resultArr.push(minElement.value)
    array.splice(minElement.index, 1)
}