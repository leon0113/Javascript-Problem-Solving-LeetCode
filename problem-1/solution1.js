function arrayReplace(inputArray, elementToReplace, substractionElement) {
    inputArray.forEach((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = substractionElement;
        }
    })

    console.log(inputArray);
}


// input 
const inputArray = [3, 2, 3];
const elementToReplace = 3;
const substractionElement = 5;

arrayReplace(inputArray, elementToReplace, substractionElement);