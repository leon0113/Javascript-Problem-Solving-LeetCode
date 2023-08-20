const arr = [12, 45, 67, 4, 23, 23, 21, 1];
const arr2 = [12, 45, 67, 89, 123, 144, 2656, 5657];
const sameSlope = (a, b, c) => (b > a && c > b) || (b < a && c < b);
const increasingOrDecreasing = (arr = []) => {
    if (arr.length <= 2) {
        return true;
    };
    for (let i = 1; i < arr.length - 1; i++) {
        if (sameSlope(arr[i - 1], arr[i], arr[i + 1])) {
            continue; // continue the loops ignore the code down below
        };
        return false;
    };
    return true;
};
console.log(increasingOrDecreasing(arr));
// console.log(increasingOrDecreasing(arr2));