
// create an arrow function, iterate and push the reverse into a new array
const theReversedArray = array => {
    let theReversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        theReversed.push(array[i]);
    }
    return theReversed 
}

// create an array sample and call the reversed arrray function
const sample = ['local', 'ghana', 'germany', 'norway']

console.log(theReversedArray(sample))