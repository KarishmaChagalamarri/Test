function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Please Enter the Array of integers.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
        throw new Error('All elements of the array must be integers.');
      }
      sum += arr[i];
    }
  
    return sum;
  }
  
  
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArrayIntegers(inputArray);
  console.log(result);
  