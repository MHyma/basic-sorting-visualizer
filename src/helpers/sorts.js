/////////////////////////Bubble sort ///////////////////////////////
export const bubbleSort = (inputArr) => {
    console.log("Sorting Array");
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

/////////////////////////// Merge Sort /////////////////////////////
export const mergeSort = (arr) => {
    const half = arr.length / 2;

    // the base case is array length <=1
    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
};
export const merge = (left, right) => {
    let sortedArr = []; // the sorted elements will go here

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
};


//////////////////////////////// Quick Sort /////////////////////////////
export const quickSort = (arr, start = 0, end = arr.length - 1) => {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end)
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    return arr
}
export const partition = (arr, start, end) => {
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            swapIndex++
            if (i !== swapIndex) {
                // SWAP
                ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
            }
        }
    }
    if (swapIndex !== start) {
        // Swap pivot into correct place
        ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
}