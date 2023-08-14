function isStrictlyIncreasing(arr) {
    let unwantedElem = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            unwantedElem++;
        };
        if (unwantedElem > 1) {
            return false;
        };
    };
    return true;
};