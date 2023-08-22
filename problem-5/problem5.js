function sumAllPrime(num) {
    let primeSum = 0;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                primeSum += i
            }
            if (i % j === 0) {
                break
            }
        }

    }
    return primeSum;
}

console.log(sumAllPrime(5));


