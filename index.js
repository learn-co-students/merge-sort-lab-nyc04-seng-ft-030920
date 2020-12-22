function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(arrayA, arrayB){
    let sorted = []
    while(arrayA.length != 0 && arrayB.length != 0){
        if(arrayA[0] < arrayB[0]){
            sorted.push(findMinAndRemoveSorted(arrayA))
        } else {
            sorted.push(findMinAndRemoveSorted(arrayB))
        }
    }
    return sorted.concat(arrayA).concat(arrayB)
}

function mergeSort(array){
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if(array.length < 2){
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}