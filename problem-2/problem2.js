function totalSum(...param) {
    // return param.reduce((a, b) => a + b);  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce
    let total = 0;
    param.forEach(element => {
        // total = total + element;
        total += element
    })
    return total
}

console.log(totalSum(1, 2, 3, 4, 54))