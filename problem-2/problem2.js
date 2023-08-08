// Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions.

// a) The First element is replaced by the multiplication of the first and second.
// b) The last element is replaced by multiplication of the last and second last.

function updateArr(array) {
    if (array.length <= 1) {
        return 'array is too short';
    }

    const updatedArray = [];
    // for first element 
    updatedArray.push(array[0] * array[1]);

    // for middle elements 
    for (let i = 1; i < array.length - 1; i++) {
        updatedArray.push(array[i - 1] * array[i + 1]);
    }

    // for last element 
    updatedArray.push(array[array.length - 2] * array[array.length - 1]);

    // return updateArray;
    console.log(updatedArray);
}

const inputArray = [2, 3, 4, 5, 6];
updateArr(inputArray);