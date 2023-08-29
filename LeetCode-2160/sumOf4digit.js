function minimumSum(num) {
    const array = num.toString().split("").sort();
    const sum = Number(array[0] + array[2]) + Number(array[1] + array[3]);
    return sum;
};

console.log(minimumSum(2932));;