let numbers = [...Array(100).keys()].map(el => ++el)

const findNumberIndex = (item, list) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            console.log(mid);
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid+1
        }
        console.log(null)
    }
}

findNumberIndex(5, numbers);
