function even(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const originalArray = [2, 7, 4];
const evenArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Array:", evenArray);

document.getElementById("originalArray").innerHTML = "Original Array: " + originalArray;
document.getElementById("evenArray").innerHTML = "Even Array: " + evenArray;