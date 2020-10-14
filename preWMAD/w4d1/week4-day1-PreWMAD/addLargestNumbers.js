const addLargestNumbers = function(data) {
  // Put your solution here
 
  let largestNum = -Infinity
  let nextLargestNum = -Infinity


  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      nextLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] > nextLargestNum && data[i] < largestNum) {
      nextLargestNum = data[i];
    }
  }

  return largestNum + nextLargestNum
};



console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));