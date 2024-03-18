function count(number) {
    let numStr = number.toString();
    let count = 0;

    for (let i = 0; i < numStr.length; i++) {
    
        if (!isNaN(parseInt(numString[i]))) {
            count++;
        }
    }

    return count;
}


console.log(countDigits(12345)); 
console.log(countDigits(987654321)); 
console.log(countDigits(0)); 
