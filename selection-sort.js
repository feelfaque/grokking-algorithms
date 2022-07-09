const arrayToSort = [30, 56, 8, 12, 104, 37, 82]

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i
        }
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    const newArr = [];
    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
        let smallestIndex = findSmallest(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1)
    }
    return newArr;
}

console.log(selectionSort(arrayToSort));


