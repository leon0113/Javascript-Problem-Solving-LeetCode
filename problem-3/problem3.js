function addBorder(array) {
    //find the lognest string in the array
    let longest = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    // add 2 more * with the value of longest string
    let wall = "*".repeat(longest.length + 2) // 3 + 2 accordaing to the example
    // to add wall in the first side
    array.unshift(wall);
    // to add wall in the last side
    array.push(wall);

    // to add border before and after every element 
    for (let i = 1; i < array.length - 1; i++) {
        array[i] = "*".concat(array[i], "*");
        // array[i] = '*' + array[i] + '*'
    }
    return array;
}

const result = addBorder(["a", "d", "ca"]);
console.log(result);